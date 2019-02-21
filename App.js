import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomePage from './src/components/HomePage/HomePage';
import PageOne from './src/components/PageOne/PageOne';
import EmailPage from './src/components/EmailPage/EmailPage';
import PhonePage from './src/components/PhonePage/PhonePage';
import EmailPassword from './src/components/EmailPage/Password';
import PhonePassword from './src/components/PhonePage/Password';
import BirthdayPage from './src/components/BirthdayPage/BirthdayPage';
import CityPage from './src/components/CityPage/CityPage';
import PronounPage from './src/components/PronounPage/PronounPage';
import ConcludingPage from './src/components/ConcludingPage/Concluding';

import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyCPh-neZDlfLcxByj0BkvCLldDN6U35GXU",
   authDomain: "vybz-project.firebaseapp.com",
   databaseURL: "https://vybz-project.firebaseio.com",
   projectId: "vybz-project",
   storageBucket: "vybz-project.appspot.com",
   messagingSenderId: ""
 };
 firebase.initializeApp(config);

const MainNavigator =  createStackNavigator({
  home: {screen: HomePage},
  pageOne: {screen: PageOne},
  email: {screen: EmailPage},
  phone: {screen: PhonePage},
  epassword: {screen: EmailPassword},
  ppassword: {screen: PhonePassword},
  bday: {screen: BirthdayPage},
  city: {screen: CityPage},
  pronoun: {screen: PronounPage},
  conclusion: {screen : ConcludingPage}
});

const App = createAppContainer(MainNavigator);

export default App;
