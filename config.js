import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCFgNPeUWfLaS9l22CLIf7LhpkQIg4w6WE",
  authDomain: "teamvotingapp-c7b76.firebaseapp.com",
  databaseURL: "https://teamvotingapp-c7b76-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-c7b76",
  storageBucket: "teamvotingapp-c7b76.appspot.com",
  messagingSenderId: "371727857937",
  appId: "1:371727857937:web:8f2b7b3f77a96e01cfb4b0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();