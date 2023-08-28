import firebase from 'firebase';

// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyBeulmMCPP6d4-Yq2bhIrCJbCLdKFp3Wz8",
    authDomain: "my-awesome-project-fc911.firebaseapp.com",
    databaseURL: "https://my-awesome-project-fc911.firebaseio.com",
    projectId: "my-awesome-project-fc911",
    storageBucket: "my-awesome-project-fc911.appspot.com",
    messagingSenderId: "384958204663",
    appId: "1:384958204663:web:0fc3e27aa47cc85593a1f2"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 // Database Authentication to allow data to be saved
 
   firebase.auth().signInWithEmailAndPassword(process.env.REACT_APP_Email, process.env.REACT_APP_Password);

   export default firebase;