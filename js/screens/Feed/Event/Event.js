import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Event = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AllEvents')}
        title="link to AllEvents Page"
      />
    </View>
  );
};

export default withNavigation(Event);
