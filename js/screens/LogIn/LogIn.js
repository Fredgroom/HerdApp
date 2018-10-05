import React, { Component } from 'react';
import { View, Text, ImageBackground, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

class LogIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../assets/images/staticPages/withOverlay/registrationScreen.png')}
          resizeMode="contain"
        >
          <View>
            <Text style={styles.mainAppLink} onPress={this._signInAsync} />
          </View>
        </ImageBackground>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'logged-in');
    this.props.navigation.navigate('MainApp');
  };
}

export default withNavigation(LogIn);
