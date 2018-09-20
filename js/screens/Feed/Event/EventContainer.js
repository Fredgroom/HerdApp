import React, { Component } from 'react';
import Event from './Event';
import { withNavigation } from 'react-navigation';

class EventContainer extends Component {
  render() {
    return <Event />;
  }
}

export default withNavigation(EventContainer);
