import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Promo from '../../../components/Promo';

const AllPromos = ({ allPromotions }) => {
  return (
    <View>
      <View>
        {allPromotions.map((promotion) => (
          <Promo key={promotion.id} promoData={promotion} />
        ))}
      </View>
    </View>
  );
};

export default withNavigation(AllPromos);
