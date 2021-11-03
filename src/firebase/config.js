import firebase from "firebase/compat";
import 'firebase/firestore'

const config = {
    apiKey: 'AIzaSyAYkwPpWaxGWLd8olPYwdnqAKVkvJ6PnvQ',
    authDomain: 'master-ielts.firebaseapp.com',
    databaseURL: 'https://master-ielts.firebaseio.com',
    projectId: 'master-ielts',
    storageBucket: 'master-ielts.appspot.com',
    messagingSenderId: '694139973995',
    appId: '1:694139973995:web:9fe008310567c848ad1c2e',
    measurementId: 'G-6B4G7H7H74'
}

const fire = firebase.initializeApp(config)
export default fire
