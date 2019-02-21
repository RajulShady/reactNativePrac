import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity, Picker } from 'react-native';

class CityPage extends Component{

  static navigationOptions = {
    header: null
  };

  state = {
    city: ''
  };

  render(){

    let {navigate} = this.props.navigation;
    return(
      <View style={styles.parent}>
        <ImageBackground source={require('../background.png')} style={styles.image} resizeMode='stretch'>

        <View style={{flex: 1.5}}>
        </View>

        <View style={styles.box}>

         <Text style={styles.citytext}>what city do you live in?</Text>
         <Text style={{fontSize: 12, color: '#c5c5c5', paddingLeft: 10}}>This will help us find the VYBZ near you</Text>

         <Picker
          style={{width: '100%'}}
          textStyle={{fontSize: 10}}
          selectedValue={this.state.city}
          onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}
         >
         <Picker.Item label='New York City' value='New York City'/>
         <Picker.Item label='San Francisco' value='San Francisco'/>
         <Picker.Item label='Chicago' value='Chicago'/>
         <Picker.Item label='Boston' value='Boston'/>
        </Picker>

          <View style={{marginTop: 0, flexDirection: 'row'}}>
             <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
             <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => navigate('pronoun')}>
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
 citytext: {
   fontSize: 20,
   fontWeight: 'bold',
   marginTop: 65,
   paddingLeft: 10
 }
})

export default CityPage;
