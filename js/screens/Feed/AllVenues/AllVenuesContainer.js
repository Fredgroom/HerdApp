import React, { Component } from 'react';
import AllVenues from './AllVenues';
import { withNavigation } from 'react-navigation';
import Loader from '../../../components/Loader';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const allVenuesQuery = gql`
  query {
    allVenues {
      id
      title
      wideImageUrl
      headerImageUrl
      secondaryImageUrls
      description
      events {
        title
      }
      promotions {
        offer
      }
      address {
        street
        city
        postcode
      }
    }
  }
`;

class AllVenuesContainer extends Component {
  render() {
    return (
      <Query query={allVenuesQuery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return <AllVenues allVenues={data.allVenues} />;
        }}
      </Query>
    );
  }
}

export default withNavigation(AllVenuesContainer);
