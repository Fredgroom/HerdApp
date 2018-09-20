import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const AllPromos = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Promo')}
        title="link to Promo Page"
      />
    </View>
  );
};

export default withNavigation(AllPromos);
