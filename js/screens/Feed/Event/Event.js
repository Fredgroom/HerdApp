import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Event = ({ eventData, navigation }) => {
  const os = Platform.OS;
  return (
    <View>
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: eventData.headerImageUrl }}
      >
        <View>
          <Text style={styles.title}>{eventData.title}</Text>
          <Text style={styles.secondHeading}>{eventData.venue.title}</Text>
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
      {os === 'android' && (
        <Text
          style={styles.allEventsButton}
          onPress={() => navigation.navigate('AllEvents')}
        >
          link to All Events
        </Text>
      )}
    </View>
  );
};

Event.propTypes = {
  eventData: PropTypes.object.isRequired,
};

export default withNavigation(Event);
