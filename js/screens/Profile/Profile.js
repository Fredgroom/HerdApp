import React, { Component } from 'react';
import { Text, View, Image, Button, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>John Doe</Text>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/staticPages/profile_image.png')}
          />
          <Button title="Sign me out" onPress={this._signOutAsync} />
        </View>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Splash');
  };
}

export default withNavigation(Profile);
