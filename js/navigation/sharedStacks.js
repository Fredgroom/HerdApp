import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { colours } from '../config/styles';
import { styles } from './styles';
import { sharedNavigationOptions } from './config';
import { AllEventsContainer } from '../screens/Feed/AllEvents';
import { AllPromosContainer } from '../screens/Feed/AllPromos';
import { AllVenuesContainer } from '../screens/Feed/AllVenues';
import { CreateHerdContainer } from '../screens/Herd/CreateHerd';
import { EventContainer } from '../screens/Feed/Event';
import { FeedContainer } from '../screens/Feed';
import { HerdContainer } from '../screens/Herd';
import { IdContainer } from '../screens/ScanId/Id';
import { IncidentReportingContainer } from '../screens/Safety/IncidentReporting';
import { LogInContainer } from '../screens/LogIn';
import { LogOutContainer } from '../screens/LogOut';
import { PromoContainer } from '../screens/Feed/Promo';
import { SafetyContainer } from '../screens/Safety';
import { ScanIdContainer } from '../screens/ScanId';
import { TonightContainer } from '../screens/Herd/Tonight';
import { VenueChatContainer } from '../screens/Safety/VenueChat';
import { VenueContainer } from '../screens/Feed/Venue';

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: FeedContainer,
      navigationOptions: () => ({
        title: 'Feed',
      }),
    },
    Promo: {
      screen: PromoContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'Promo',
        headerRight: (
          <Text
            style={styles.headerRight}
            onPress={() => navigation.navigate('AllPromos')}
          >
            All Promos
          </Text>
        ),
      }),
    },
    Event: {
      screen: EventContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'Event',
        headerRight: (
          <Text
            style={styles.headerRight}
            onPress={() => navigation.navigate('AllEvents')}
          >
            All Events
          </Text>
        ),
      }),
    },
    AllEvents: {
      screen: AllEventsContainer,
      navigationOptions: () => ({
        title: 'Local Events',
      }),
    },
    AllPromos: {
      screen: AllPromosContainer,
      navigationOptions: () => ({
        title: 'Herd Promos',
      }),
    },
    AllVenues: {
      screen: AllVenuesContainer,
      navigationOptions: () => ({
        title: 'Local Venues',
      }),
    },
    Venue: {
      screen: VenueContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'Venue',
        headerRight: (
          <Text
            style={{
              color: colours.blue,
              marginRight: 10,
              fontSize: 17,
            }}
            onPress={() => navigation.navigate('AllVenues')}
          >
            All Venues
          </Text>
        ),
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Feed',
    }),
  }
);

const ScanIdStack = createStackNavigator(
  {
    ScanId: {
      screen: ScanIdContainer,
      navigationOptions: () => ({
        title: 'Scan ID',
      }),
    },
    Id: {
      screen: IdContainer,
      navigationOptions: () => ({
        title: 'ID',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'ScanId',
    }),
  }
);

const SafetyStack = createStackNavigator(
  {
    Safety: {
      screen: SafetyContainer,
      navigationOptions: () => ({
        title: 'Safety',
      }),
    },
    IncidentReporting: {
      screen: IncidentReportingContainer,
      navigationOptions: () => ({
        title: 'Incident Reporting',
      }),
    },
    VenueChat: {
      screen: VenueChatContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'Chat',
        headerRight: (
          <Text
            style={styles.headerRight}
            onPress={() => navigation.navigate('Safety')}
          >
            Close Chat
          </Text>
        ),
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Safety',
    }),
  }
);

const HerdStack = createStackNavigator(
  {
    Herd: {
      screen: HerdContainer,
      navigationOptions: () => ({
        title: 'Herd',
      }),
    },
    Tonight: {
      screen: TonightContainer,
      navigationOptions: () => ({
        title: 'Tonight',
      }),
    },
    CreateHerd: {
      screen: CreateHerdContainer,
      navigationOptions: () => ({
        title: 'New Herd',
      }),
    },
    Event: {
      screen: EventContainer,
      navigationOptions: () => ({
        title: 'Event',
      }),
    },
    Promo: {
      screen: PromoContainer,
      navigationOptions: () => ({
        title: 'Promotion',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Herd',
    }),
  }
);

const LogOutStack = createStackNavigator(
  {
    LogOut: {
      screen: LogOutContainer,
      navigationOptions: () => ({
        title: 'Log Out',
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'LogOut',
    }),
  }
);

const LogInStack = createStackNavigator({
  LogIn: {
    screen: LogInContainer,
    navigationOptions: () => ({
      title: 'Log In',
    }),
  },
});

export {
  FeedStack,
  ScanIdStack,
  SafetyStack,
  HerdStack,
  LogOutStack,
  LogInStack,
};
