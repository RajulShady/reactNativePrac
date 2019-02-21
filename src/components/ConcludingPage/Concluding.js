import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity, Picker } from 'react-native';

class ConcludingPage extends Component{

  static navigationOptions = {
    header: null
  };

  render(){

    let {navigate} = this.props.navigation;
    return(
      <View style={styles.parent}>
        <ImageBackground source={require('./last.png')} style={styles.image} resizeMode='stretch'>
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
 }
})

export default ConcludingPage;
