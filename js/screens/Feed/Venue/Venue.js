import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Venue = ({ venueData, navigation }) => {
  const os = Platform.OS;

  return (
    <ScrollView>
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

      {os === 'android' && (
        <View>
          <Text
            style={styles.allVenuesButton}
            onPress={() => navigation.navigate('AllVenues')}
          >
            link to All Venues
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

Venue.propTypes = {
  venueData: PropTypes.object.isRequired,
};

export default withNavigation(Venue);
