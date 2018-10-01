import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Event from './Event';
import Loader from '../../../components/Loader';
import Promo from '../../../components/Promo';
import { styles } from './styles';

const eventPromoQuery = gql`
  query EventPromo($venueId: ID!) {
    allPromotions(first: 1, filter: { venue: { id: $venueId } }) {
      id
      offer
      wideImageUrl
      headerImageUrl
      scanCodeImageUrl
      venue {
        title
      }
    }
  }
`;

class EventContainer extends Component {
  render() {
    const { eventData } = this.props.navigation.state.params;
    const venueId = eventData.venue.id;

    return (
      <Query query={eventPromoQuery} variables={{ venueId }}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          const promoData = data.allPromotions[0];
          return (
            <ScrollView>
              <Event eventData={eventData} />
              <Promo style={styles.wideImage} promoData={promoData} />
            </ScrollView>
          );
        }}
      </Query>
    );
  }
}

export default withNavigation(EventContainer);
