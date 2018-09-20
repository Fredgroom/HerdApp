import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { AllEventsContainer } from '../screens/Feed/AllEvents';
import { AllPromosContainer } from '../screens/Feed/AllPromos';
import { AllVenuesContainer } from '../screens/Feed/AllVenues';
import { EventContainer } from '../screens/Feed/Event';
import { FeedContainer } from '../screens/Feed';
import { HerdContainer } from '../screens/Herd';
import { LogOutContainer } from '../screens/LogOut';
import { PromoContainer } from '../screens/Feed/Promo';
import { SafetyContainer } from '../screens/Safety';
import { ScanIdContainer } from '../screens/ScanId';
import { sharedNavigationOptions } from './config';
import { VenueContainer } from '../screens/Feed/Venue';

const renderIcon = (iconName, tintColor) => (
  <Ionicons name={iconName} size={25} color={tintColor} />
);

const FeedStack = createStackNavigator(
  {
    Feed: FeedContainer,
    Promo: PromoContainer,
    Event: EventContainer,
    AllEvents: AllEventsContainer,
    AllPromos: AllPromosContainer,
    AllVenues: AllVenuesContainer,
    Venue: VenueContainer,
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
    ScanId: ScanIdContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
    }),
  }
);

const SafetyStack = createStackNavigator(
  {
    Safety: SafetyContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
    }),
  }
);

const HerdStack = createStackNavigator(
  {
    Herd: HerdContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
    }),
  }
);

const LogOutStack = createStackNavigator(
  {
    LogOut: LogOutContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
    }),
  }
);

FeedStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-wine', tintColor),
};

ScanIdStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-qr-scanner', tintColor),
};

SafetyStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-notifications', tintColor),
};

HerdStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-contacts', tintColor),
};

LogOutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-log-out', tintColor),
};

export default (MyApp = createDrawerNavigator(
  {
    Feed: FeedStack,
    ScanId: ScanIdStack,
    Safety: SafetyStack,
    Herd: HerdStack,
    LogOut: LogOutStack,
  },
  {
    drawerWidth: 200,
  }
));
