/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import StackNavigator from './navigation/StackNavigator'

const firebaseConfig = {
  apiKey: 'AIzaSyBbxB8bZUmIqtE45IAB70nVZQ_95GPv3_Y',
  authDomain: 'farmerdirectory-94650.firebaseapp.com',
  projectId: 'farmerdirectory-94650',
  storageBucket: 'farmerdirectory-94650.appspot.com',
  messagingSenderId: '429402850935',
  appId: '1:429402850935:web:8ffe86dfe40374670a2872',
  measurementId: 'G-W0CZB2944R'
}

firebase.initializeApp(firebaseConfig)
if (firebase.app()) {
  console.log('APP INIT')
}

export default function App () {
  return (
    <StackNavigator />
  )
}
