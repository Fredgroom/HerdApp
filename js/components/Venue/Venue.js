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
            style={{ width: 500, height: 120 }}
            source={{ uri: itemData.wideImageUrl }}
          >
            <View>
              <Text style={styles.text}>{itemData.title}</Text>
              <Text style={styles.text}>
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
