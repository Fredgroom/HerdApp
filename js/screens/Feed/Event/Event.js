import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ImageBackground, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Event = ({ eventData, navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AllEvents')}
        title="link to All Events"
      />
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: eventData.headerImageUrl }}
      >
        <View>
          <Text style={styles.text}>{eventData.title}</Text>
          <Text style={styles.text}>{eventData.venue.title}</Text>
        </View>
      </ImageBackground>
      <Text>{eventData.description}</Text>
      {eventData.secondaryImageUrls.map((imageUrl, index) => (
        <Image key={index} style={styles.tabImage} source={{ uri: imageUrl }} />
      ))}
    </View>
  );
};

Event.propTypes = {
  eventData: PropTypes.object.isRequired,
};

export default withNavigation(Event);
