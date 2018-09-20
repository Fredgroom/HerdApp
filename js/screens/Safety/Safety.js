import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Safety = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('IncidentReporting')}
          title="Link to Incident Reporting"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('AlertVenueStaff')}
          title="Link to Alert Venue Staff"
        />
      </View>
    </View>
  );
};

export default withNavigation(Safety);
