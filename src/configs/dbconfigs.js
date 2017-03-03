import firebase from 'firebase';

const config = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    databaseURL: "YOUR_DATABASE_KEY"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
