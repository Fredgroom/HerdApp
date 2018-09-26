import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Venue from '../../../components/Venue';

const AllVenues = ({ allVenues }) => {
  return (
    <View>
      {allVenues.map((item) => (
        <Venue key={item.id} itemData={item} />
      ))}
    </View>
  );
};

export default withNavigation(AllVenues);
