import firebase from 'firebase/app'
import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyBbxB8bZUmIqtE45IAB70nVZQ_95GPv3_Y",
//   authDomain: "farmerdirectory-94650.firebaseapp.com",
//   projectId: "farmerdirectory-94650",
//   storageBucket: "farmerdirectory-94650.appspot.com",
//   messagingSenderId: "429402850935",
//   appId: "1:429402850935:web:8ffe86dfe40374670a2872",
//   measurementId: "G-W0CZB2944R"
// };

// firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export const streamTasks = ( observer ) => {
  db.collection('farmers').onSnapshot(observer)
}

export default db
