import firebase from 'firebase'

var firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyA4Da3nKvGUDIfJ1Cc_34QuDcxVL2JLVeo",
    authDomain: "wp-finalproject-b9de4.firebaseapp.com",
    databaseURL: "https://wp-finalproject-b9de4-default-rtdb.firebaseio.com",
    projectId: "wp-finalproject-b9de4",
    storageBucket: "wp-finalproject-b9de4.appspot.com",
    messagingSenderId: "694023569586",
    appId: "1:694023569586:web:99325dec792dad4f9349ab",
    measurementId: "G-8YTMJY3ERD"
})

var db = firebaseApp.firestore();

export { db };

