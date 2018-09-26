import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Venue from './Venue';

class VenueContainer extends Component {
  render() {
    const { itemData } = this.props.navigation.state.params;

    return <Venue itemData={itemData} />;
  }
}

export default withNavigation(VenueContainer);
