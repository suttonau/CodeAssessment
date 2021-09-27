import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export const streamTasks = (observer) => {
  db.collection('farmers').onSnapshot(observer)
}

export default db
