import React, { Component } from 'react';
import Promo from './Promo';
import { withNavigation } from 'react-navigation';

class PromoContainer extends Component {
  render() {
    const { itemData } = this.props.navigation.state.params;
    return <Promo itemData={itemData} />;
  }
}

export default withNavigation(PromoContainer);
