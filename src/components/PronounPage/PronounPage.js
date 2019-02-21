import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity, Picker } from 'react-native';

class PronounPage extends Component{

  static navigationOptions = {
    header: null
  };

  render(){

    let {navigate} = this.props.navigation;
    return(
      <View style={styles.parent}>
        <ImageBackground source={require('../background.png')} style={styles.image} resizeMode='stretch'>

        <View style={{flex: 1.5}}>
        </View>

        <View style={styles.box}>

          {/* Preferred Pronoun text*/}
          <Text style={styles.pronountext}>preferred pronoun</Text>

          {/* creating all the buttons*/}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.firstButton} onPress={() => navigate('conclusion')}>
              <Text style={styles.btnText}>He / His</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigate('conclusion')}>
              <Text style={styles.btnText}>She / Hers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigate('conclusion')}>
              <Text style={styles.btnText}>They / Theirs</Text>
            </TouchableOpacity>

            <View
             style={{
               borderBottomColor: '#9a9a9a',
               borderBottomWidth: 1,
               marginTop: 40,
               width: '50%',
               alignSelf: 'center',
               justifyContent: 'center'
             }}/>

            <TouchableOpacity style={styles.lastButton} onPress={() => navigate('conclusion')}>
              <Text style={[styles.btnText, {color: 'black'}]}>or are you a business ?</Text>
            </TouchableOpacity>
          </View>

          {/*footer part*/}
          <View style={[styles.line, {marginTop: 90}]}>
               <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
               <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
           </View>

            <View style={styles.loginLine}>
              <Text style={{textAlign: 'center'}}>
                <Text style={{color: '#737073'}}>Already have an account?</Text>
                <Text style={{fontWeight: 'bold'}}> Log In.</Text>
              </Text>
            </View>

        </View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
   width: '100%',
   height: '100%',
   position: 'relative',
 },
 box: {
   flex: 8.5,
   backgroundColor: 'white',
   padding: 15,
   borderRadius: 30,
   margin: 15,
   marginBottom: 25
 },
 btn: {
   marginTop: 30,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#9a9a9a',
   overflow: 'hidden',
   height: 40
 },
 btnText: {
   textAlign: 'center',
   color: '#9a9a9a',
   height: 40,
   padding: 5.5,
   fontSize: 15
 },
 firstButton: {
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#9a9a9a',
   overflow: 'hidden',
   height: 40
 },
 lastButton: {
   marginTop: 35,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: 'black',
   overflow: 'hidden',
   height: 40
 },
 line: {
   flexDirection: 'row',
   padding: 10
 },
 loginLine: {
   marginTop: 10
 },
 pronountext: {
   fontSize: 20,
   fontWeight: 'bold',
   marginTop: 50,
   paddingLeft: 10
 },
 buttons: {
   marginTop: 20,
   padding: 12
 }
})

export default PronounPage;
