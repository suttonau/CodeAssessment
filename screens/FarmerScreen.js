import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Farmers from '../components/Farmers'
// import db, { streamTasks } from '../db/firestore'
import * as firebase from 'firebase'
import 'firebase/firestore';

const FarmerScreen = () => {
  const [farmers, setFarmers] = useState([])
  const db = firebase.firestore()

  const mapDocToFarmer = (document) => {
    return {
      id: document.id,
      name: document.data().name,
      email: document.data().email,
      farmName: document.data().farmName,
      createdOn: document.data().createdOn
    }
  }

  useEffect(() => {
    const unsubscribe = db.collection('farmers').onSnapshot({
      next: querySnapshot => {
       const farmerSnap =  querySnapshot.docs.map(docSnapshot => mapDocToFarmer(docSnapshot))
       setFarmers(farmerSnap)
      },
      error: (error) => console.log(error)
    })
    getFarmers()

    return unsubscribe
  }, [])

  const getFarmers = async () => {
    await db.collection('farmers')
    .get()
    .then(result => result.docs)
    .then(docs => docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      email: doc.data().email,
      farmName: doc.data().farmName,
      createdOn: doc.createdOn
    })))
    .then(farmers => setFarmers(farmers))
  }

  return (
    <View>
      <Text>List of Farmers</Text>
      <Farmers />
      {
        farmers?.map(farmer => 
          <View key={farmer.id}>
            <Text>{farmer.name}</Text>
          </View>
        )
      }
    </View>
  )
}

export default FarmerScreen
