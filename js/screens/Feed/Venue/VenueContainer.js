import React, { Component } from 'react';
import Venue from './Venue';
import { withNavigation } from 'react-navigation';

class VenueContainer extends Component {
  render() {
    return <Venue />;
  }
}

export default withNavigation(VenueContainer);
