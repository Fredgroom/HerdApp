import React, { Component } from 'react';
import Feed from './Feed';
import { withNavigation } from 'react-navigation';

class FeedContainer extends Component {
  render() {
    return <Feed />;
  }
}

export default withNavigation(FeedContainer);
