import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const IncidentReporting = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('SendIncidentReport')}
          title="Link to Send Incident Reporting"
        />
      </View>
    </View>
  );
};

export default withNavigation(IncidentReporting);
