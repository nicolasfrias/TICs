
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';


import Sensores from './Sensores'

class Home extends Component<Props> {
  render() {

    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/running.jpg')} 
        style={{width: '100%', height: '100%'}} >

          <Text style={styles.text}>SmarT-shirt</Text>

       <TouchableOpacity
         style={styles.button1}
         onPress={() => this.props.navigation.navigate('Sensores')}
       >
         <Text> Iniciar </Text>

       </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  text:{
    textAlign: 'center',
    color:'black',
    fontSize: 50,
    marginTop: '70%',
  },

  button1:{
    alignItems : 'center',
    textAlign : 'center',
    backgroundColor: '#F5FCFF',
    marginTop: '20%',
    marginLeft: '10%',
    marginRight: '30%',
    borderRadius: 4,
    padding: 10,
    width: 300,
    height: 50,
  }



export default Home
