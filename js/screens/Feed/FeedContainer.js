import React, { Component } from 'react';
import Feed from './Feed';
import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loader from '../../components/Loader';

const allFeedQuery = gql`
  query {
    allVenues(first: 1) {
      id
      title
      wideImageUrl
      headerImageUrl
      secondaryImageUrls
      description
      address {
        street
        postcode
      }
    }
    allPromotions(first: 1) {
      id
      offer
      wideImageUrl
      scanCodeImageUrl
      headerImageUrl
      venue {
        title
      }
    }
    allEvents(first: 1) {
      id
      title
      date
      wideImageUrl
      headerImageUrl
      secondaryImageUrls
      description
      venue {
        id
        title
      }
    }
  }
`;
class FeedContainer extends Component {
  render() {
    return (
      <Query query={allFeedQuery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          const promoData = data.allPromotions[0];
          const eventData = data.allEvents[0];
          const venueData = data.allVenues[0];

          return (
            <Feed
              promoData={promoData}
              eventData={eventData}
              venueData={venueData}
            />
          );
        }}
      </Query>
    );
  }
}

export default withNavigation(FeedContainer);
