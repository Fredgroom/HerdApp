import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const Venue = ({ itemData, navigation }) => {
  return (
    <View>
      <Text>{itemData.title}</Text>
      <Button
        onPress={() => navigation.navigate('AllVenues')}
        title="link to All Venues Page"
      />
    </View>
  );
};

Venue.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default withNavigation(Venue);
