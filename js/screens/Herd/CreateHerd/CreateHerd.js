import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const CreateHerd = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Tonight')}
        title="Link to Tonight Page"
      />
    </View>
  );
};
export default withNavigation(CreateHerd);
