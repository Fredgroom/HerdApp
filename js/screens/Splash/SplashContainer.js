import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Splash from './Splash';
class SplashContainer extends Component {
  render() {
    return <Splash />;
  }
}
export default withNavigation(SplashContainer);
