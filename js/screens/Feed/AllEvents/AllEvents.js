import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const AllEvents = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Event')}
        title="link to Event Page"
      />
    </View>
  );
};

export default withNavigation(AllEvents);
