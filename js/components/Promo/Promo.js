import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

class Promo extends Component {
  render() {
    const { itemData, navigation } = this.props;
    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Promo', { itemData })}
        >
          <ImageBackground
            style={styles.wideImage}
            source={{ uri: itemData.wideImageUrl }}
          >
            <View>
              <Text style={styles.offer}>{itemData.offer}</Text>
              <Text style={styles.title}>{itemData.venue.title}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}

Promo.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default withNavigation(Promo);
