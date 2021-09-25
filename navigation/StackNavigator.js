import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import FarmerScreen from '../screens/FarmerScreen';

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FarmerScreen" component={FarmerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator