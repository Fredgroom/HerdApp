import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';
import { withNavigation } from 'react-navigation';

const Id = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.scanIdImage}
        source={require('../../../assets/images/staticPages/id@.png')}
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
