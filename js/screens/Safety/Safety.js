import React from 'react';
import { styles } from './styles';
import { View, Text, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

const Safety = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/staticPages/withOverlay/08_SAFETY.png')}
        resizeMode="contain"
      >
        <View>
          <Text
            style={styles.incidentReportingLink}
            onPress={() => navigation.navigate('IncidentReporting')}
          />
        </View>
        <View>
          <Text
            style={styles.alertButton}
            onPress={() => navigation.navigate('VenueChat')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default withNavigation(Safety);
