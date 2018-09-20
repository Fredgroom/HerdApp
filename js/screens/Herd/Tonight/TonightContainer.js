import React, { Component } from 'react';
import Tonight from './Tonight';
import { withNavigation } from 'react-navigation';

class TonightContainer extends Component {
  render() {
    return <Tonight />;
  }
}

export default withNavigation(TonightContainer);
