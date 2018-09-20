import React, { Component } from 'react';
import Safety from './Safety';
import { withNavigation } from 'react-navigation';
class SafetyContainer extends Component {
  render() {
    return <Safety />;
  }
}

export default withNavigation(SafetyContainer);
