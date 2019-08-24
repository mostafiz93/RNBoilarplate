/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import React, { Component } from 'react';
import { View, Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';

import Styles from '../styles/SplashScreen';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed'
  };

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.checkUserSignedIn();
  }

  async checkUserSignedIn() {
    try {
      const value = await AsyncStorage.getItem('user');

      if (value != null) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    } catch (error) {
      alert('Opss! Async Storage Error!');
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Image
          source={require('../assets/images/SplashScreen.png')}
          style={Styles.splashScreenImage}
        />
        <View style={Styles.splashScreenContainer}>
          <Spinner isVisible size={50} type='ThreeBounce' color='#26d9fd' />
        </View>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};
