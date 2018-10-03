import React from 'react';
import { styles } from './styles';
import { ImageBackground, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const ScanId = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.scanIdImage}
        source={require('../../assets/images/staticPages/scan_id.png')}
      >
        <View>
          <Text
            style={styles.idNavContainer}
            onPress={() => navigation.navigate('Id')}
          />
        </View>
        <View>
          <Text
            style={styles.idButton}
            onPress={() => navigation.navigate('Id')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default withNavigation(ScanId);
