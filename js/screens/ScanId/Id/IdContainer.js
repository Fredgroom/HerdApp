import React, { Component } from 'react';
import Id from './Id';
import { withNavigation } from 'react-navigation';
class IdContainer extends Component {
  render() {
    return <Id />;
  }
}
export default withNavigation(IdContainer);
