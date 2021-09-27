import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Farmers = () => {
  return (
    <View>
      <Text>Farmers</Text>
      <View style={styles.farmItem}>
        <Text>Name</Text>
        <Text>Email</Text>
        <Text>Farm Name</Text>
      </View>
    </View>
  )
}

export default Farmers

const styles = StyleSheet.create({
  farmItem: {
    flexDirection: 'row'
  }
})