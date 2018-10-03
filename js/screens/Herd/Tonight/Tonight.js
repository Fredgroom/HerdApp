import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Tonight = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/staticPages/herd4.png')}
      >
        <View style={styles.buttonContainer}>
          <View>
            <Text
              style={styles.trackingContainer}
              onPress={() => navigation.navigate('Herd')}
            />
          </View>
          <View>
            <Text
              style={styles.createHerdContainer}
              onPress={() => navigation.navigate('CreateHerd')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default withNavigation(Tonight);
