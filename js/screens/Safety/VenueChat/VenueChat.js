import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const VenueChat = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/staticPages/venueChat.png')}
      >
        <View>
          <Text
            style={styles.safetyContainer}
            onPress={() => navigation.navigate('Safety')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default withNavigation(VenueChat);
