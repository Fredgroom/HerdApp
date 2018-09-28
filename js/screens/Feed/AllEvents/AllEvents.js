import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Event from '../../../components/Event';

const AllEvents = ({ allEvents }) => {
  return (
    <View>
      {allEvents.map((event) => (
        <Event key={event.id} eventData={event} />
      ))}
    </View>
  );
};

AllEvents.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withNavigation(AllEvents);
