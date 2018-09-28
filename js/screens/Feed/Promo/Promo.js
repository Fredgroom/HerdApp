import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, ImageBackground, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Promo = ({ promoData, navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AllPromos')}
        title="link to AllPromos Page"
      />
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: promoData.headerImageUrl }}
      >
        <View>
          <Text style={styles.offer}>{promoData.offer}</Text>
          <Text style={styles.title}>{promoData.venue.title}</Text>
        </View>
      </ImageBackground>
      <View>
        <Text>Scan your code to get free drinks</Text>
        <Image
          style={styles.scanCodeImageUrl}
          source={{ uri: promoData.scanCodeImageUrl }}
        />
      </View>
    </View>
  );
};

Promo.propTypes = {
  promoData: PropTypes.object.isRequired,
};

export default withNavigation(Promo);
