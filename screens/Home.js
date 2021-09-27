import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

let validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email Address is required').email('Please enter a valid email'),
  farmName: yup.string().min(3, ({min}) => `Farm name must be ${min} characters`),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

const Home = ( {props, navigation} ) => {
  return (
    <View>
      <Text>Enter your Farmer Info!</Text>
      <Formik
        initialValues={{name: '', email: '', farmName: ''}}
        validateOnMount={true}
        onSubmit={values => console.log(values)}
      >
      {
        ({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
          <ScrollView
            style={{flex: 1, backgroundColor: '#fefefe'}}
            showsVerticalScrollIndicator={false}
          >
            <View>
              <TextInput
                onChangeText={handleChange('name')}
                placeholder='Name'
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </View>
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                placeholder='Enter Email'
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View>
              <TextInput
                onChangeText={handleChange('farmName')}
                placeholder='Farm Name'
                onBlur={handleBlur('farmName')}
                value={values.farmName}
              />
            </View>
            <Button onPress={() => navigation.navigate('FarmerScreen')} title='Submit' />
          </ScrollView>
        )
      }
      </Formik>
    </View>
  )
}

export default Home
