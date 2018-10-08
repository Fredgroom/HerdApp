import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';
import Promo from '../../components/Promo';
import Event from '../../components/Event';
import Venue from '../../components/Venue';

const Feed = ({ navigation, promoData, eventData, venueData }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingText}>
        Your guide to all local events and promotions at venues near you.
      </Text>
      <View>
        <View style={styles.feedHeaderText}>
          <Text style={styles.componentTitle}>EXCLUSIVE HERD PROMOS</Text>
          <TouchableHighlight onPress={() => navigation.navigate('AllPromos')}>
            <Text style={styles.moreLink}>MORE...</Text>
          </TouchableHighlight>
        </View>
        <Promo promoData={promoData} />
      </View>

      <View>
        <View style={styles.feedHeaderText}>
          <Text style={styles.componentTitle}>LOCAL EVENTS FOR YOU</Text>
          <TouchableHighlight onPress={() => navigation.navigate('AllEvents')}>
            <Text style={styles.moreLink}>MORE...</Text>
          </TouchableHighlight>
        </View>
        <Event eventData={eventData} />
      </View>

      <View>
        <View style={styles.feedHeaderText}>
          <Text style={styles.componentTitle}>YOUR LOCAL VENUES</Text>
          <TouchableHighlight onPress={() => navigation.navigate('AllVenues')}>
            <Text style={styles.moreLink}>MORE...</Text>
          </TouchableHighlight>
        </View>
        <Venue venueData={venueData} />
      </View>
    </ScrollView>
  );
};

Feed.propTypes = {
  promoData: PropTypes.object.isRequired,
  eventData: PropTypes.object.isRequired,
  venueData: PropTypes.object.isRequired,
};

export default withNavigation(Feed);
