import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Promo = ({ promoData }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerImage}
          source={{ uri: promoData.headerImageUrl }}
        >
          <View style={styles.backgroundColor}>
            <Text style={styles.offer}>{promoData.offer}</Text>
          </View>
          <View style={styles.backgroundColor}>
            <Text style={styles.title}>
              <Icon name="ios-pin" size={20} /> {promoData.venue.title}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.scanCodeContainer}>
          <Text style={styles.scanCodeText}>
            Scan your code to get your free drinks
          </Text>
          <Image
            style={styles.scanCodeImageUrl}
            source={{ uri: promoData.scanCodeImageUrl }}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  );
};

Promo.propTypes = {
  promoData: PropTypes.object.isRequired,
};

export default withNavigation(Promo);
