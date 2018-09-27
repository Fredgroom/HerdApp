import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const Event = ({ itemData, navigation }) => {
  return (
    <View>
      <Text>{itemData.title}</Text>
      <Button
        onPress={() => navigation.navigate('AllEvents')}
        title="link to All Events Page"
      />
    </View>
  );
};

Event.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default withNavigation(Event);
