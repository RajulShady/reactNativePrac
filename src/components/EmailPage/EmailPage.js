import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity, Alert } from 'react-native';

class EmailPage extends Component{

  static navigationOptions = {
    header: null
  };

  state = {
    email: ''
  };

  handleClick = () =>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const {email} = this.state;
    if(email == ''){
      Alert.alert('Error', 'Email can not be blank!', [{
      text: 'Ok'
    }]);
    }else if(reg.test(email) === false){
        Alert.alert('Error', 'Email is incorrect!', [{
        text: 'Ok'
      }]);
    }else{
      this.props.navigation.navigate('epassword');
    }
  }

  render(){
    let {navigate} = this.props.navigation;
    return(
      <View style={styles.parent}>
        <ImageBackground source={require('../background.png')} style={styles.image} resizeMode='stretch'>

        <View style={styles.box}>
          {/* tabs */}
          <View style={styles.tabs}>
          <TouchableOpacity onPress={() => navigate('phone')}>
           <Text style={styles.tab}>phone</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('email')}>
           <Text
             style={[styles.tab, {backgroundColor: '#d7d7d7', color: '#a3a3a3'}]}>
               email
            </Text>
          </TouchableOpacity>
          </View>

          <TextInput
            value={this.state.email}
            onChangeText={text => this.setState({ email: text} )}
            placeholder='  Enter Email'
            underlineColorAndroid='#d7d7d7'
            color="#646464"
            style={{ marginTop: 18, marginLeft: 14, marginRight: 14, paddingBottom: 10, fontSize: 13, color: "#646464"}}

            />
            <Text style={{marginTop: '1.5%', fontSize: 8, lineHeight:13, letterSpacing: 0.013, color: '#b5b5b5', marginLeft: 20, marginRight: 14}}>
             By signing up, you confirm that you agree to our Terms of Use and read and understood
             our Privacy Policy
            </Text>
            <TouchableOpacity style={styles.btn} onPress={this.handleClick}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
{/* 
            <View style={styles.line}>
               <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
               <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
           </View> */}

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
   flex: 8.4,
   marginTop: 112,
   marginLeft: 17,
   marginRight: 16,
   marginBottom: 28,
   backgroundColor: 'white',
   borderRadius: 30,
 },
 tab: {
   borderColor: '#d7d7d7',
   borderWidth: 1,
   padding: 10,
   paddingBottom: 6,
   paddingTop: 6,
   width: 150,
   textAlign: 'center',
   fontWeight: 'bold',
   fontSize: 12,
   letterSpacing: 0.16,
   lineHeight: 21,
   marginTop: 20
 },
 tabs: {
   flexDirection: 'row',
   justifyContent: 'center',
   marginTop: '14.05%',
   marginLeft: 30,
   marginRight: 28
 },
 btn: {
   marginTop: 69    ,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#e78ad7',
   overflow: 'hidden',
   height: 40,
   marginLeft: 29,
   marginRight: 28
 },
 btnText: {
   textAlign: 'center',
   color: 'white',
   backgroundColor: '#e78ad7',
   height: 40,
   padding: 5.5,
   fontSize: 15
 },
 line: {
   flexDirection: 'row',
   marginTop: 190,
   marginLeft: 29,
   marginRight: 28
 },
 loginLine: {
   marginTop: '3.55%',
   marginBottom: 28,
   flex: 1,
   justifyContent: 'flex-end',
 }
})

export default EmailPage;
