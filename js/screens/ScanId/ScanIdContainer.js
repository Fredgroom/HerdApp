import React, { Component } from 'react';
import ScanId from './ScanId';
import { withNavigation } from 'react-navigation';
class ScanIdContainer extends Component {
  render() {
    return <ScanId />;
  }
}
export default withNavigation(ScanIdContainer);
