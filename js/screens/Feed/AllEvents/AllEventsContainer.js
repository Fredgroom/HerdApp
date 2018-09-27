import React, { Component } from 'react';
import AllEvents from './AllEvents';
import { withNavigation } from 'react-navigation';
import Loader from '../../../components/Loader';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const AllEventsQuery = gql`
  query {
    allEvents {
      id
      title
      date
      description
      wideImageUrl
      headerImageUrl
      secondaryImageUrls
      venue {
        id
        title
        address {
          street
          city
          postcode
        }
        events {
          title
        }
      }
    }
  }
`;

class AllEventsContainer extends Component {
  render() {
    return (
      <Query query={AllEventsQuery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return <AllEvents allEvents={data.allEvents} />;
        }}
      </Query>
    );
  }
}

export default withNavigation(AllEventsContainer);
