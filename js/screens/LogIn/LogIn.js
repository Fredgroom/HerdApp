import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';

class LogIn extends Component {
  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('MainApp');
  };
}

export default withNavigation(LogIn);
