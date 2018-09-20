import React, { Component } from 'react';
import VenueChat from './VenueChat';
import { withNavigation } from 'react-navigation';
class VenueChatContainer extends Component {
  render() {
    return <VenueChat />;
  }
}
export default withNavigation(VenueChatContainer);
