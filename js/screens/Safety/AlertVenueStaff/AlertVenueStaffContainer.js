import React, { Component } from 'react';
import AlertVenueStaff from './AlertVenueStaff';
import { withNavigation } from 'react-navigation';

class AlertVenueStaffContainer extends Component {
  render() {
    return <AlertVenueStaff />;
  }
}

export default withNavigation(AlertVenueStaffContainer);
