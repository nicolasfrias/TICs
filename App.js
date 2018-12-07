/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, TextInput, TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';
import BluetoothSerial from 'react-native-bluetooth-serial';
import BLuetooth from 'BLuetooth.';

class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home',

  };
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
class Sensores extends Component<Props> {
    static navigationOptions = {
    title: 'Medicion',
  };
  render() {
    return (
      <View style={styles.container2}>
       <TouchableOpacity
         style={styles.button1}
         onPress={() => this.props.navigation.navigate('Inputs')}
       >
         <Text> Mas </Text>

       </TouchableOpacity>
      </View>
    );
  }
}
 class Inputs extends Component<Props>{
      constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            Sexo: undefined,
            items: [
                {
                    label: 'Hombre',
                    value: 'Hombre',
                },
                {
                    label: 'Mujer',
                    value: 'Mujer',
                },
            ]
          };
      }
    static navigationOptions = {
    title: 'Datos',
  };
    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                favColor: 'red',
            });
        }, 1000);
    }

  render(){    
    return(
      <View>
      <RNPickerSelect
          placeholder={{
              label: 'seleccione su sexo',
              value: null,
          }}
          items={this.state.items}
          onValueChange={(value) => {
              this.setState({
                  favColor: value,
              });
          }}
          onUpArrow={() => {
              this.inputRefs.name.focus();
          }}
          onDownArrow={() => {
              this.inputRefs.picker2.togglePicker();
          }}
          style={{ ...pickerSelectStyles }}
          value={this.state.favColor}
          ref={(el) => {
              this.inputRefs.picker = el;
          }}
      />

       <TextInput
        ref='Peso'
        keyboardType="numeric"
        style={[styles.textInput, { width: '100%' }]}
        placeholder='peso ----> Kg'
        maxLength={3}
        minLength={2}
      />
       <TextInput
        ref='Estatura'
        keyboardType="numeric"
        style={[styles.textInput, { width: '100%' }]}
        placeholder='Estatura ----> Cm '
        maxLength={3}
        minLength={2}
      />      
       <TouchableOpacity
         style={styles.button1}
         onPress={() => this.props.navigation.navigate('BLuetooth')}
       >
         <Text> Enviar </Text>

       </TouchableOpacity>


      </View>

    );
  }
 }

 



const RootStack = createStackNavigator(
  {
    Home: Home,
    Sensores: Sensores,
    Inputs : Inputs,
    BLuetooth : BLuetooth,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const styles = StyleSheet.create({

  text:{
    textAlign: 'center',
    color:'black',
    fontSize: 50,
    marginTop: '50%',
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
  },

  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }

});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
  