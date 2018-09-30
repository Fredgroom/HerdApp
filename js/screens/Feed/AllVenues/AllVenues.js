import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Venue from '../../../components/Venue';
import { styles } from './styles';

const AllVenues = ({ allVenues }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {allVenues.map((venue) => (
          <Venue key={venue.id} venueData={venue} />
        ))}
      </ScrollView>
    </View>
  );
};

AllVenues.propTypes = {
  allVenues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withNavigation(AllVenues);
