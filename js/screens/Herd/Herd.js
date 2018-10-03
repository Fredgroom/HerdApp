import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const herdLocationImage = require('../../assets/images/staticPages/herd1.png');
const personLocationImage = require('../../assets/images/staticPages/herd2.png');

class Herd extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.showPersonBackgroundImage = false;
    this.state = {
      image: herdLocationImage,
    };
  }

  refreshScreen() {
    this.showPersonBackgroundImage = !this.showPersonBackgroundImage;
    const image = this.showPersonBackgroundImage
      ? personLocationImage
      : herdLocationImage;
    this.setState({ image });
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={this.state.image}>
        <View style={styles.buttonContainer}>
          <View>
            <Text
              style={styles.createHerdContainer}
              onPress={() => this.navigation.navigate('CreateHerd')}
            />
          </View>
          <View>
            <Text
              style={styles.tonightContainer}
              onPress={() => this.navigation.navigate('Tonight')}
            />
          </View>
        </View>
        <View>
          <Text
            style={styles.jamesContainer}
            onPress={this.refreshScreen.bind(this)}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default withNavigation(Herd);
