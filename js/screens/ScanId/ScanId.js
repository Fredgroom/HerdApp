import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const ScanId = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button onPress={() => navigation.navigate('Id')} title="Link to Id" />
      </View>
    </View>
  );
};

export default withNavigation(ScanId);
