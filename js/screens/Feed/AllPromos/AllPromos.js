import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import Promo from '../../../components/Promo';

const AllPromos = ({ navigation, allPromotions }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Promo')}
        title="link to Promo Page"
      />

      <View>
        {allPromotions.map((item) => (
          <Promo key={item.id} itemData={item} />
        ))}
      </View>
    </View>
  );
};

export default withNavigation(AllPromos);
