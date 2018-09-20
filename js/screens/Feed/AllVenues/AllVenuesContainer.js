import React, { Component } from 'react';
import AllVenues from './AllVenues';
import { withNavigation } from 'react-navigation';

class AllVenuesContainer extends Component {
  render() {
    return <AllVenues />;
  }
}

export default withNavigation(AllVenuesContainer);
