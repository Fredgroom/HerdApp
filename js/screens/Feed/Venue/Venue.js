import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ImageBackground, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Venue = ({ venueData, navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AllVenues')}
        title="link to All Venues"
      />
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: venueData.headerImageUrl }}
      >
        <Text style={styles.title}>{venueData.title}</Text>
      </ImageBackground>
      <Text>{venueData.description}</Text>

      <View>
        {venueData.secondaryImageUrls.map((imageUrl, index) => (
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

Venue.propTypes = {
  venueData: PropTypes.object.isRequired,
};

export default withNavigation(Venue);
