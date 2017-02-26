import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

// import * as firebase from 'firebase';

import MainStyles from './styles/MainStyles';
import CastsList from './screens/CastsList';

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDdpHHDZaxpwMnHnc5einQpZqV5sYLM8UU",
//   authDomain: "chat-dc137.firebaseapp.com",
//   databaseURL: "https://chat-dc137.firebaseio.com",
//   storageBucket: "chat-dc137.appspot.com",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {

  constructor(props) {
    super(props);

    // this.itemsRef = firebaseApp.database().ref().child('configs');
  }

  render() {
    // Firebase Output
    // this.itemsRef.child('authorColour').on('value', snapshot => {
    //   console.log(snapshot.val());
    // });

    return (
      <CastsList />

    );
  }
}

export default App;