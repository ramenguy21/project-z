import * as firebase from 'firebase';

var firebaseObj = firebase.initializeApp({
    apiKey: "AIzaSyC-8rO9uv9OG013OiekczmPXvRqCXAKtVA",
    authDomain: "hijama-923ff.firebaseapp.com",
    databaseURL: "https://hijama-923ff.firebaseio.com",
    projectId: "hijama-923ff",
    storageBucket: "hijama-923ff.appspot.com",
    messagingSenderId: "95293548672",
    appId: "1:95293548672:web:4de4677b9d86041ce31e65"
});

let db = firebaseObj.firestore()

export default db