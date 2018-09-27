import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

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
            <View>
              <Text style={styles.offer}>{promoData.offer}</Text>
              <Text style={styles.title}>{promoData.venue.title}</Text>
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
