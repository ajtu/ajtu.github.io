import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyA2tPI2YGML1qXUxizzwMErRY-VuKkSzqA",
  authDomain: "swim-contacts.firebaseapp.com",
  databaseURL: "https://swim-contacts.firebaseio.com",
  projectId: "swim-contacts",
  storageBucket: "swim-contacts.appspot.com",
  messagingSenderId: "692839807508"
};
firebase.initializeApp(config);
export default firebase;
