import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import EmailPage from './EmailPage';

class EmailPassword extends Component{

  static navigationOptions = {
    header: null
  };

  state = {
    password: '',
    enabled: false
  };

  handleClick = () => {
    const {password} = this.state;
    if(password == ''){
      Alert.alert('Error', 'Password can not be blank!',[{
        text: 'OK'
      }]);
    }else if(password.length <= 3){
      Alert.alert('Error', 'Password is too short',[{
        text: 'OK'
      }]);
    }else {
      this.props.navigation.navigate('bday');
    }
  }

  render(){

    return(
      <View style={styles.parent}>
        <ImageBackground source={require('../background.png')} style={styles.image} resizeMode='stretch'>

        <View style={{flex: 1.5}}>
        </View>

        <View style={styles.box}>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
           <Text style={styles.tab}>phone</Text>
           <Text
             style={[styles.tab, {backgroundColor: '#d7d7d7', color: '#b5b5b5', fontWeight: 'bold'}]}>
               email
            </Text>
          </View>

          <TextInput
            value={this.state.password}
            onChangeText={text => this.setState({ password: text, enabled: true })}
            placeholder='Enter Password'
            underlineColorAndroid='#d7d7d7'
            style={{padding: 10, marginTop: 21}}
            secureTextEntry={true}
            />

            { this.state.enabled ? (
              <TouchableOpacity style={styles.btn} onPress={this.handleClick}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.btn2} onPress={this.handleClick}>
                <Text style={styles.btnText2}>Next</Text>
              </TouchableOpacity>
            )}


            <View style={[styles.line, {marginTop: 215}]}>
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
 tab: {
   borderColor: '#d7d7d7',
   borderWidth: 1,
   padding: 10,
   marginTop: 70,
   width: 150,
   textAlign: 'center'
 },
 btn: {
   marginTop: 25,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#e78ad7',
   overflow: 'hidden',
   height: 40
 },
 btn2: {
   marginTop: 25,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#f4c5eb',
   overflow: 'hidden',
   height: 40
 },
 btnText: {
   textAlign: 'center',
   color: 'white',
   backgroundColor: '#e78ad7',
   height: 40,
   padding: 5.5,
   fontSize: 15
 },
 btnText2: {
   textAlign: 'center',
   color: 'white',
   backgroundColor: '#f4c5eb',
   height: 40,
   padding: 5.5,
   fontSize: 15
 },
 line: {
   flexDirection: 'row',
   marginTop: 20,
   padding: 10
 },
 loginLine: {
   marginTop: 10
 }
})

export default EmailPassword;
