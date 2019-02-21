import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';

class BirthdayPage extends Component{

  static navigationOptions = {
    header: null
  };

  state = {
    date: ''
  };

  handleClick = () => {
    const {date} = this.state;
    if(date == ''){
      Alert.alert('Error', 'Please enter your birthday', [{
        text: 'OK'
      }]);
    }else {
      this.props.navigation.navigate('city');
    }
  }

  render(){

    return(
      <View style={styles.parent}>
        <ImageBackground source={require('../background.png')} style={styles.image} resizeMode='stretch'>

        <View style={{flex: 1.5}}>
        </View>

        <View style={styles.box}>

         <Text style={styles.bdaytext}>what's your birthday?</Text>
         <Text style={{fontSize: 12, color: '#c5c5c5', paddingLeft: 10}}>Your birthday will not be shown publicly</Text>

         <DatePicker
            style={{marginTop: 10}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2010-01-01"
            maxDate="2050-12-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateInput: {
              borderWidth: 0,
              alignItems: 'flex-start',
              padding: 10
            },
            dateIcon: {
              width: 0,
              height: 0
            }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />

          <View style={{marginTop: 0, flexDirection: 'row'}}>
             <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
             <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
         </View>


            <TouchableOpacity style={styles.btn} onPress={this.handleClick}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>

            <View style={[styles.line, {marginTop: 230}]}>
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
   marginTop: 65,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#e78ad7',
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
 line: {
   flexDirection: 'row',
   padding: 10
 },
 loginLine: {
   marginTop: 10
 },
 bdaytext: {
   fontSize: 20,
   fontWeight: 'bold',
   marginTop: 65,
   paddingLeft: 10
 }
})

export default BirthdayPage;
