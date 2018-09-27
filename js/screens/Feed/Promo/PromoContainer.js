import React, { Component } from 'react';
import Promo from './Promo';
import { withNavigation } from 'react-navigation';

class PromoContainer extends Component {
  render() {
    const { promoData } = this.props.navigation.state.params;
    return <Promo promoData={promoData} />;
  }
}

export default withNavigation(PromoContainer);
