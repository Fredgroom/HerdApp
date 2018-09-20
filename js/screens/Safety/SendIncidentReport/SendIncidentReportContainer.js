import React, { Component } from 'react';
import SendIncidentReport from './SendIncidentReport';
import { withNavigation } from 'react-navigation';
class SendIncidentReportContainer extends Component {
  render() {
    return <SendIncidentReport />;
  }
}

export default withNavigation(SendIncidentReportContainer);
