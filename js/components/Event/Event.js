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
            <View style={styles.textContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.titleBackground}>
                  <Text style={styles.title}>{eventData.title}</Text>
                </View>
                <View style={styles.subHeadingBackground}>
                  <Text style={styles.subHeading}>{eventData.venue.title}</Text>
                </View>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.month}>
                  {this.extractEventMonth(eventData.date)}
                </Text>
                <Text style={styles.day}>
                  {this.extractEventDay(eventData.date)}
                </Text>
              </View>
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
