import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Event from '../../../components/Event';

const AllEvents = ({ allEvents }) => {
  return (
    <View>
      {allEvents.map((item) => (
        <Event key={item.id} itemData={item} />
      ))}
    </View>
  );
};

export default withNavigation(AllEvents);
