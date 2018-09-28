import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Venue from './Venue';

class VenueContainer extends Component {
  render() {
    const { venueData } = this.props.navigation.state.params;

    return <Venue venueData={venueData} />;
  }
}

export default withNavigation(VenueContainer);
