import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { colours } from '../config/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from './config';
import { FeedContainer } from '../screens/Feed';
import { ScanIdContainer } from '../screens/ScanId';
import { SafetyContainer } from '../screens/Safety';
import { HerdContainer } from '../screens/Herd';
import { LogOutContainer } from '../screens/LogOut';

const renderIcon = (iconName, tintColor) => (
  <Ionicons name={iconName} size={25} color={tintColor} />
);

const FeedStack = createStackNavigator(
  {
    Feed: FeedContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      ...sharedNavigationOptions(navigation),
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
