import React, { Component } from 'react';
import Promo from './Promo';
import { withNavigation } from 'react-navigation';

class PromoContainer extends Component {
  render() {
    return <Promo />;
  }
}

export default withNavigation(PromoContainer);
