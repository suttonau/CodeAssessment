import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Farmers from '../components/Farmers'
// import db from '../db/firestore'

const FarmerScreen = () => {
  const [farmers, setFarmers] = useState([])

  // useEffect(() => {
  //   db.collection('farmers')
  //     .get()
  //     .then(result => result.docs)
  //     .then(docs => docs.map(doc => ({
  //       id: doc.id,
  //       name: doc.data().name,
  //       email: doc.data().email,
  //       farmName: doc.data().farmName,
  //       createdOn: doc.createdOn
  //     })))
  //     .then(farmers => setFarmers(farmers))
  // }, [])

  return (
    <View>
      <Text>List of Farmers</Text>
      <Farmers />
    </View>
  )
}

export default FarmerScreen
