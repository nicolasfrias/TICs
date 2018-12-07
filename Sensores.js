import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

class Sensores extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

      <Text>Sensores</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
	backgroundColor:'black'

	}
});
export default Sensores