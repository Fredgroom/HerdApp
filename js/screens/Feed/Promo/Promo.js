import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Promo = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AllPromos')}
        title="link to AllPromos Page"
      />
    </View>
  );
};

export default withNavigation(Promo);
