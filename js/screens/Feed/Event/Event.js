import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Event = ({ eventData, navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: eventData.headerImageUrl }}
      >
        <View>
          <View style={styles.backgroundColour}>
            <Text style={styles.title}>{eventData.title}</Text>
          </View>
          <View style={styles.backgroundColour}>
            <Text style={styles.secondHeading}>{eventData.venue.title}</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.description}>{eventData.description}</Text>
      <View style={styles.secondaryImageContainer}>
        {eventData.secondaryImageUrls.map((imageUrl, index) => (
          <Image
            style={styles.secondaryImage}
            key={index}
            source={{ uri: imageUrl }}
          />
        ))}
      </View>
    </View>
  );
};

Event.propTypes = {
  eventData: PropTypes.object.isRequired,
};

export default withNavigation(Event);
