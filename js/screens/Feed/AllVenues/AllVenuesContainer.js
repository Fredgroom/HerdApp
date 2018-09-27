import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AllVenues from './AllVenues';
import Loader from '../../../components/Loader';

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
