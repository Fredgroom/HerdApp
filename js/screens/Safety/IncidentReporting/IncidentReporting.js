import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const IncidentReporting = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/staticPages/incidentReporting.png')}
      >
        <View>
          <Text
            style={styles.safetyContainer1}
            onPress={() => navigation.navigate('Safety')}
          />
        </View>
        <View>
          <Text
            style={styles.safetyContainer2}
            onPress={() => navigation.navigate('Safety')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default withNavigation(IncidentReporting);
