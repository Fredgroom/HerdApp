import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const CreateHerd = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/staticPages/withOverlay/herd3.png')}
        resizeMode="contain"
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
              style={styles.tonightContainer}
              onPress={() => navigation.navigate('Tonight')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default withNavigation(CreateHerd);
