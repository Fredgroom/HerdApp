'use strict';

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { ImageBackground } from 'react-native';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';
import { styles } from './styles';

const splashImages = [
  require('../../assets/images/staticPages/splash1.png'),
  require('../../assets/images/staticPages/splash2.png'),
  require('../../assets/images/staticPages/splash3.png'),
  require('../../assets/images/staticPages/splash4.png'),
];

class Splash extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.state = {
      imageIndex: 0,
    };
  }

  onSwipe(gestureName) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    const imageIndex = this.state.imageIndex;
    const lastImageIndex = splashImages.length - 1;

    switch (gestureName) {
      case SWIPE_LEFT:
        if (imageIndex === lastImageIndex) {
          this.navigation.navigate('LogIn');
          return;
        }
        this.setState({ imageIndex: imageIndex + 1 });
        break;
      case SWIPE_RIGHT:
        if (imageIndex > 0) {
          this.setState({ imageIndex: imageIndex - 1 });
          return;
        }
        break;
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    const imageIndex = this.state.imageIndex;
    const backgroundImage = splashImages[imageIndex];

    return (
      <GestureRecognizer
        style={styles.backgroundContainer}
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
      >
        <ImageBackground
          style={styles.backgroundImage}
          source={backgroundImage}
        />
      </GestureRecognizer>
    );
  }
}

export default withNavigation(Splash);
