import React, { Component } from 'react';
import CreateHerd from './CreateHerd';
import { withNavigation } from 'react-navigation';
class CreateHerdContainer extends Component {
  render() {
    return <CreateHerd />;
  }
}
export default withNavigation(CreateHerdContainer);
