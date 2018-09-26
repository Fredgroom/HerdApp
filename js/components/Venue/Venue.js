import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

class Venue extends Component {
  render() {
    const { itemData, navigation } = this.props;

    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Venue', { itemData })}
        >
          <ImageBackground
            style={styles.wideImage}
            source={{ uri: itemData.wideImageUrl }}
          >
            <View>
              <Text style={styles.title}>{itemData.title}</Text>
              <Text style={styles.address}>
                {itemData.address.street} {itemData.address.postcode}
              </Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}

Venue.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default withNavigation(Venue);
