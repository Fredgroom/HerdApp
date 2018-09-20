import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const AlertVenueStaff = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('VenueChat')}
          title="Link to Send Incident Reporting"
        />
      </View>
    </View>
  );
};

export default withNavigation(AlertVenueStaff);
