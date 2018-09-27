import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import { styles } from './styles';

class Event extends Component {
  extractEventMonth(dateTime) {
    return moment(dateTime)
      .format('MMMM')
      .substring(0, 3);
  }

  extractEventDay(dateTime) {
    return moment(dateTime).format('D');
  }

  render() {
    const { itemData, navigation } = this.props;
    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Event', { itemData })}
        >
          <ImageBackground
            style={styles.wideImage}
            source={{ uri: itemData.wideImageUrl }}
          >
            <View>
              <Text style={styles.text}>{itemData.title}</Text>
              <Text style={styles.text}>{itemData.venue.title}</Text>
              <Text style={styles.text}>
                {this.extractEventMonth(itemData.date)}
              </Text>
              <Text style={styles.text}>
                {this.extractEventDay(itemData.date)}
              </Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}

Event.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default withNavigation(Event);
