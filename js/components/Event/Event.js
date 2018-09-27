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
    const { eventData, navigation } = this.props;
    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Event', { eventData })}
        >
          <ImageBackground
            style={styles.wideImage}
            source={{ uri: eventData.wideImageUrl }}
          >
            <View>
              <Text style={styles.text}>{eventData.title}</Text>
              <Text style={styles.text}>{eventData.venue.title}</Text>
              <Text style={styles.text}>
                {this.extractEventMonth(eventData.date)}
              </Text>
              <Text style={styles.text}>
                {this.extractEventDay(eventData.date)}
              </Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}

Event.propTypes = {
  eventData: PropTypes.object.isRequired,
};

export default withNavigation(Event);
