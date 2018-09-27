import React, { Component } from 'react';
import AllPromos from './AllPromos';
import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loader from '../../../components/Loader';

const allPromotionsQuery = gql`
  query {
    allPromotions {
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

class AllPromosContainer extends Component {
  render() {
    return (
      <Query query={allPromotionsQuery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return <AllPromos allPromotions={data.allPromotions} />;
        }}
      </Query>
    );
  }
}

export default withNavigation(AllPromosContainer);
