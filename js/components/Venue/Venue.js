import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

class Venue extends Component {
  render() {
    const { venueData, navigation } = this.props;
    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Venue', { venueData })}
        >
          <ImageBackground
            style={styles.wideImage}
            source={{ uri: venueData.wideImageUrl }}
          >
            <View>
              <Text style={styles.title}>{venueData.title}</Text>
              <Text style={styles.address}>
                {venueData.address.street} {venueData.address.postcode}
              </Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}

Venue.propTypes = {
  venueData: PropTypes.object.isRequired,
};

export default withNavigation(Venue);
