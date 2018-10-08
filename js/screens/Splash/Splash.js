import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Swiper from 'react-native-swiper';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';
import { colours } from '../../config/styles';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  onSwipe(gestureName) {
    const { SWIPE_LEFT } = swipeDirections;
    if (gestureName === SWIPE_LEFT) {
      this.navigation.navigate('LogIn');
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <Swiper
        style={styles.wrapper}
        stack
        activeDotColor={colours.blue}
        loop={false}
        swipeDirection={'left'}
        bounces={true}
      >
        <ImageBackground
          style={styles.slide}
          source={require('../../assets/images/staticPages/splash1.png')}
        />
        <ImageBackground
          style={styles.slide}
          source={require('../../assets/images/staticPages/splash2.png')}
        />
        <ImageBackground
          style={styles.slide}
          source={require('../../assets/images/staticPages/splash3.png')}
        />

        <GestureRecognizer
          style={styles.lastSlide}
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          config={config}
        >
          <ImageBackground
            style={styles.lastSlideImage}
            source={require('../../assets/images/staticPages/splash4.png')}
          />
        </GestureRecognizer>
      </Swiper>
    );
  }
}

export default withNavigation(Splash);
