import React, { Component } from 'react';
import AllEvents from './AllEvents';
import { withNavigation } from 'react-navigation';

class AllEventsContainer extends Component {
  render() {
    return <AllEvents />;
  }
}

export default withNavigation(AllEventsContainer);
