import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Tonight = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('Event')}
          title="Link to Event Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Promo')}
          title="Link to Promo Page"
        />
      </View>
    </View>
  );
};
export default withNavigation(Tonight);
