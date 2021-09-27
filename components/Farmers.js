/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Farmers = ({ name, email, farmName, id }) => {
  return (
    <View style={styles.card} key={id}>
      <View style={styles.cardContent}>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{farmName}</Text>
      </View>
    </View>
  )
}

export default Farmers

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    marginVertical: 5,
    marginHorizontal: 15
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10
  }
})
