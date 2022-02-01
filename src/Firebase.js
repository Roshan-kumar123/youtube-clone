import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDZEThLG276YlAbb9OTDx-iZLHR1hc_Psk',
  authDomain: 'roshan-yt-clone-react.firebaseapp.com',
  projectId: 'roshan-yt-clone-react',
  storageBucket: 'roshan-yt-clone-react.appspot.com',
  messagingSenderId: '17242101201',
  appId: '1:17242101201:web:fba0fbe74154c287217cf0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
