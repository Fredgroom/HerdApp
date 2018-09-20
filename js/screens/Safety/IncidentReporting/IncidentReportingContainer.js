import React, { Component } from 'react';
import IncidentReporting from './IncidentReporting';
import { withNavigation } from 'react-navigation';
class IncidentReportingContainer extends Component {
  render() {
    return <IncidentReporting />;
  }
}
export default withNavigation(IncidentReportingContainer);
