import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const VenueChat = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('AlertVenueStaff')}
          title="Close Chat"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Safety')}
          title="Link to Safety Page"
        />
      </View>
    </View>
  );
};

export default withNavigation(VenueChat);
