import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';

class LogOut extends Component {
  render() {
    return (
      <View>
        <Button title="Sign me out" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Splash');
  };
}

export default withNavigation(LogOut);
