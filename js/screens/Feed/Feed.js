import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Feed = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('Promo')}
          title="link to Promo Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Event')}
          title="link to Event Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('AllEvents')}
          title="link to AllEvents Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('AllPromos')}
          title="link to AllPromos Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('AllVenues')}
          title="link to AllVenues Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Venue')}
          title="link to Venue Page"
        />
      </View>
    </View>
  );
};

export default withNavigation(Feed);
