import React, { Component } from 'react';
import { Animated, View, StyleSheet, ImageBackground, Text } from 'react-native';

class HomePage extends Component{
  state = {
    fadeAnimation: new Animated.Value(0)
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnimation,
      {
        toValue: 1,
        duration: 3000
      }
    ).start();
  }

  componentWillMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('pageOne');
    }, 4000);
  }

  render(){
    let {fadeAnimation} = this.state;
    let {navigate} = this.props.navigation;
    return(
      <View style={styles.parent}>
        <Animated.View style={{opacity: fadeAnimation}}>
           <ImageBackground source={require('./vybz.png')} style={styles.image} resizeMode='stretch'>
           </ImageBackground>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'black'
  },
  image: {
   width: '100%',
   height: '100%',
   position: 'relative',
  },
  btn: {
    marginTop: 300,
    marginLeft: 200,
    borderWidth: 1,
    borderColor: '#e78ad7',
    overflow: 'hidden',
    height: 40,

  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#e78ad7',
    height: 40,
    padding: 5.5,
    fontSize: 15
  }
})

export default HomePage;
