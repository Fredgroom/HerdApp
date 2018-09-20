import React, { Component } from 'react';
import Herd from './Herd';
import { withNavigation } from 'react-navigation';
class HerdContainer extends Component {
  render() {
    return <Herd />;
  }
}

export default withNavigation(HerdContainer);
