import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ImageBackground, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

const Venue = ({ itemData, navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AllVenues')}
        title="link to All Venues"
      />
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: itemData.headerImageUrl }}
      >
        <Text style={styles.title}>{itemData.title}</Text>
      </ImageBackground>
      <Text>{itemData.description}</Text>

      <View>
        {itemData.secondaryImageUrls.map((imageUrl, index) => (
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
  itemData: PropTypes.object.isRequired,
};

export default withNavigation(Venue);
