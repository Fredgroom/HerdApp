import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';
import Promo from '../../components/Promo';
import Event from '../../components/Event';
import Venue from '../../components/Venue';

const Feed = ({ navigation, promoData, eventData, venueData }) => {
  return (
    <View>
      <Text>
        Your guide to all local events and promotions at venues near you.
      </Text>
      <View>
        <View style={styles.feedHeaderText}>
          <Text>EXCLUSIVE HERD OFFERS</Text>
          <TouchableHighlight onPress={() => navigation.navigate('AllPromos')}>
            <Text>more...</Text>
          </TouchableHighlight>
        </View>
        <Promo promoData={promoData} />
      </View>

      <View>
        <View style={styles.feedHeaderText}>
          <Text>LOCAL EVENTS FOR YOU</Text>
          <TouchableHighlight onPress={() => navigation.navigate('AllEvents')}>
            <Text>more...</Text>
          </TouchableHighlight>
        </View>
        <Event eventData={eventData} />
      </View>

      <View>
        <View style={styles.feedHeaderText}>
          <Text>YOUR LOCAL VENUES</Text>
          <TouchableHighlight onPress={() => navigation.navigate('AllVenues')}>
            <Text>more...</Text>
          </TouchableHighlight>
        </View>
        <Venue venueData={venueData} />
      </View>
    </View>
  );
};

Feed.propTypes = {
  promoData: PropTypes.object.isRequired,
  eventData: PropTypes.object.isRequired,
  venueData: PropTypes.object.isRequired,
};

export default withNavigation(Feed);
