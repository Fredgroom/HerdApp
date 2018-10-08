import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Venue = ({ venueData, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: venueData.headerImageUrl }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{venueData.title}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.description}>{venueData.description}</Text>

      <View style={styles.secondaryImageContainer}>
        {venueData.secondaryImageUrls.map((imageUrl, index) => (
          <Image
            style={styles.secondaryImage}
            key={index}
            source={{ uri: imageUrl }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

Venue.propTypes = {
  venueData: PropTypes.object.isRequired,
};

export default withNavigation(Venue);
