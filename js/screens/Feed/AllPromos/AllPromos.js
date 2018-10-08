import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Promo from '../../../components/Promo';
import { styles } from './styles';

const AllPromos = ({ allPromotions }) => {
  return (
    <ScrollView style={styles.container}>
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
