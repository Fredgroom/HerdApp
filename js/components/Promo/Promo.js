import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class Promo extends Component {
  render() {
    const { promoData, navigation } = this.props;
    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Promo', { promoData })}
        >
          <ImageBackground
            style={styles.wideImage}
            source={{ uri: promoData.wideImageUrl }}
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
        </TouchableHighlight>
      </View>
    );
  }
}

Promo.propTypes = {
  promoData: PropTypes.object.isRequired,
};

export default withNavigation(Promo);
