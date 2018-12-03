/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';



type Props = {};


const AppStackNavigator = createStackNavigator ({
  home:{
  screen: Home 
  }

})
export default app = createAppContainer(AppStackNavigator)


  