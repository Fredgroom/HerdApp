import React, { Component } from 'react';
import AllPromos from './AllPromos';
import { withNavigation } from 'react-navigation';

class AllPromosContainer extends Component {
  render() {
    return <AllPromos />;
  }
}

export default withNavigation(AllPromosContainer);
