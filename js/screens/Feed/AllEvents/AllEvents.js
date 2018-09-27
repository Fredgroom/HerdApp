import React from 'react';
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

export default withNavigation(AllEvents);
