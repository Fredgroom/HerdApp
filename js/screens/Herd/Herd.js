import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Herd = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('Tonight')}
          title="Link to Tonight Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('CreateHerd')}
          title="Link to Create Herd Page"
        />
      </View>
    </View>
  );
};

export default withNavigation(Herd);
