import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Venue from '../../../components/Venue';

const AllVenues = ({ allVenues }) => {
  return (
    <View>
      {allVenues.map((venue) => (
        <Venue key={venue.id} venueData={venue} />
      ))}
    </View>
  );
};

AllVenues.propTypes = {
  allVenues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withNavigation(AllVenues);
