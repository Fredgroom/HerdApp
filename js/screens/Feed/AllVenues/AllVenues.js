import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const AllVenues = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Venue')}
        title="link to Venue Page"
      />
    </View>
  );
};

export default withNavigation(AllVenues);
