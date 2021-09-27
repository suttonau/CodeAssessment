/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import * as firebase from 'firebase'
import 'firebase/firestore'

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email Address is required').email('Please enter a valid email'),
  farmName: yup.string().min(3, ({ min }) => `Farm name must be ${min} characters`),
  createdOn: yup.date().default(function () {
    return new Date()
  })
})

const Home = ({ props, navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [farmName, setFarmName] = useState('')
  const [createdOn, setCreatedOn] = useState(new Date())
  const [farmers, setFarmers] = useState([])
  const [emails, setEmails] = useState([])

  const db = firebase.firestore()

  useEffect(() => {
    getFarmers()
  }, [])

  // attempted to read farmers collection, to check for dupliate emails
  // seems this is not the best route within FireStore.
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
      .then(farmers => {
        setFarmers(farmers)
      })
  }

  return (
    <View style={styles.container}>
      <Text>Enter your Farmer Info!</Text>
      <Formik
        initialValues={{ name: '', email: '', farmName: '' }}
        validateOnMount={true}
        onSubmit={(values) => {
          setName(values.name)
          setEmail(values.email)
          setFarmName(values.farmName)
          db.collection('farmers').add({
            name: values.name,
            email: values.email,
            farmName: values.farmName,
            createdOn: createdOn
          })
          navigation.navigate('FarmerScreen')
        }}
        validationSchema={validationSchema}
      >
      {
        ({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                placeholder='Name'
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {(errors.name && touched.name) && (
                <Text style={styles.errors}>{errors.name}</Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                placeholder='Enter Email'
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {(errors.email && touched.email) && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('farmName')}
                placeholder='Farm Name'
                onBlur={handleBlur('farmName')}
                value={values.farmName}
              />
              {(errors.farmName && touched.farmName) && (
                <Text style={styles.errors}>{errors.farmName}</Text>
              )}
            </View>
            <Button
              style={[styles.button, { color: isValid ? '#4632A1' : '#CACFD2' }]}
              disabled={!isValid}
              rounded
              onPress={handleSubmit} title='Submit' />
            </View>
        )
      }
      </Formik>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    shadowColor: '#00acee'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5
  }
})
