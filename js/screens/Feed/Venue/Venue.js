import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Venue = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AllVenues')}
        title="link to All Venues Page"
      />
    </View>
  );
};

export default withNavigation(Venue);
