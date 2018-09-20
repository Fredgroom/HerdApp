import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const SendIncidentReport = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('IncidentReporting')}
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

export default withNavigation(SendIncidentReport);
