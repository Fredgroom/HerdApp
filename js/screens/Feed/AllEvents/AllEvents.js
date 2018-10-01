import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Event from '../../../components/Event';

const AllEvents = ({ allEvents }) => {
  return (
    <ScrollView>
      {allEvents.map((event) => (
        <Event key={event.id} eventData={event} />
      ))}
    </ScrollView>
  );
};

AllEvents.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withNavigation(AllEvents);
