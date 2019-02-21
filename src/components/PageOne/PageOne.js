import React, { Component } from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class HomePage extends Component{

  static navigationOptions = {
    header: null
  };

  render(){

    let {navigate} = this.props.navigation;

    return(
      <View style={styles.parent}>
        <View style={{ flex: 1 }}>
           <ImageBackground source={require('../background.png')} style={styles.image} resizeMode='stretch'>

           <View style={{flex: 3}}>
           <Text style={styles.heading}>Welcome to VYBZ</Text>
           <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            consequat.
            </Text>
            </View>

            <View style={styles.part2}>
              <View style={{alignItems: 'center'}}>
                <Ionicons name='logo-yahoo' color='#00d0ff' size={90}/>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#9a9a9a', letterSpacing: 3}}>
                  vybz
                </Text>
              </View>

              <Text style={styles.text}>
                Sign up with your <Text style={{color: '#4681e1'}} onPress={()=>navigate('phone')}>phone</Text> or
                <Text style={{color: '#4681e1'}} onPress={() => navigate('email')}> email</Text>
              </Text>

              <View style={styles.line}>
                 <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
                 <Text style={{ alignSelf:'center', paddingHorizontal:20 }}>or</Text>
                 <View style={{backgroundColor: '#c6c2c2', height: 1, flex: 1, alignSelf: 'center'}} />
             </View>

             <Text style={{ textAlign: 'center', marginTop: 12}}>Sign up with</Text>

             <View style={styles.icons}>
               <Ionicons name='logo-facebook' color='blue' size={32} style={{padding:10}}/>
               <Ionicons name='logo-instagram' color='#f70065' size={32} style={{padding:10}}/>
               <Ionicons name='logo-google' color='#ffc100' size={32} style={{padding:10}}/>
             </View>

             <View style={[styles.line, {marginTop: 55}]}>
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
  heading: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 60
  },
  para: {
    color: 'white',
    textAlign: 'center',
    padding: 30,
    paddingTop: 10,
    fontSize: 12
  },
  part2: {
    flex: 7,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
    margin: 15,
    marginTop: 0,
    marginBottom: 25
  },
  text: {
    textAlign: 'center',
    marginTop: 70
  },
  line: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 10
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginLine: {
    marginTop: 10
  }
})

export default HomePage;
