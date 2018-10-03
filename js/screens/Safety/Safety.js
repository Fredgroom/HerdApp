import React from 'react';
import { styles } from './styles';
import { View, Text, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

const Safety = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.safetyImage}
        source={require('../../assets/images/staticPages/08_SAFTEY.png')}
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
