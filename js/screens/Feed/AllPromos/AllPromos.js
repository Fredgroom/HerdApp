import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Promo from '../../../components/Promo';

const AllPromos = ({ allPromotions }) => {
  return (
    <ScrollView>
      {allPromotions.map((promotion) => (
        <Promo key={promotion.id} promoData={promotion} />
      ))}
    </ScrollView>
  );
};

AllPromos.propTypes = {
  allPromotions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withNavigation(AllPromos);
