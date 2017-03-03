import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDNTqsRrHXODPbIZCNdY4uGDoK2o1qyyXc",
    authDomain: "crime-report-71269.firebaseapp.com",
    databaseURL: "https://crime-report-71269.firebaseio.com",
    storageBucket: "crime-report-71269.appspot.com",
    messagingSenderId: "746708762107"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
