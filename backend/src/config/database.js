const firebase = require('firebase/app');

const firebaseConfig = {
  // apiKey: 'AIzaSyCQPEDjNlm_3GQ4aAkgv5KfgWBmqzU7EOg',
  authDomain: 'wolfcars-d95b6.firebaseapp.com',
  databaseURL: 'https://wolfcars-d95b6.firebaseio.com',
  projectId: 'wolfcars-d95b6',
  storageBucket: 'wolfcars-d95b6.appspot.com',
  messagingSenderId: '281295507345',
  appId: '1:281295507345:web:4c0054935bee05b1a8d430',
};

module.exports = firebase.initializeApp(firebaseConfig);
