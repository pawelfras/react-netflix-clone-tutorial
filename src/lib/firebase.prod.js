import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBIIfXCLxphQ_25VSC_NDjQ-6mJZJJDdK8',
    authDomain: 'react-netflix-clone-tutorial.firebaseapp.com',
    databaseURL: 'https://react-netflix-clone-tutorial.firebaseio.com',
    projectId: 'react-netflix-clone-tutorial',
    storageBucket: 'react-netflix-clone-tutorial.appspot.com',
    messagingSenderId: '860704998570',
    appId: '1:860704998570:web:6dae1bc9c38fe2c332bcd3',
};

const appFirebase = firebase.initializeApp(config);

// seedDatabase(firebase);

export default appFirebase;
