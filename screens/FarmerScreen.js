/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Farmers from '../components/Farmers'
import * as firebase from 'firebase'
import 'firebase/firestore'

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
        const farmerSnap = querySnapshot.docs.map(docSnapshot => mapDocToFarmer(docSnapshot))
        setFarmers(farmerSnap)
      },
      error: (error) => console.log(error)
    })
    getFarmers()
    // cleanup
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
      <ScrollView>
      {
        farmers?.map(farmer =>
        <Farmers
          id={farmer.id}
          name={farmer.name}
          email={farmer.email}
          farmName={farmer.farmName}
        />
        )
      }
      </ScrollView>
    </View>
  )
}

export default FarmerScreen

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 15
  }
})
