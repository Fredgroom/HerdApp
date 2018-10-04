import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';
import { withNavigation } from 'react-navigation';

const Id = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/staticPages/withOverlay/id.png')}
        resizeMode="contain"
      >
        <View>
          <Text
            style={styles.scanIdLink}
            onPress={() => navigation.navigate('ScanId')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default withNavigation(Id);
