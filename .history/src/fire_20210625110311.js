import firebase from 'firebase'

<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

var firebaseConfig = {
    apiKey: "AIzaSyBitzj6Q1fppR2i91C8EnSStYnJDFqpP8M",
    authDomain: "friend-zone-6afd3.firebaseapp.com",
    projectId: "friend-zone-6afd3",
    storageBucket: "friend-zone-6afd3.appspot.com",
    messagingSenderId: "126152906683",
    appId: "1:126152906683:web:1fabd64433f52c6ee6569e"
}

const fire = firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export default fire