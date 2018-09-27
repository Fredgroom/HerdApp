import React, { Component } from 'react';
import Event from './Event';
import { withNavigation } from 'react-navigation';

class EventContainer extends Component {
  render() {
    const { itemData } = this.props.navigation.state.params;

    return <Event itemData={itemData} />;
  }
}

export default withNavigation(EventContainer);
