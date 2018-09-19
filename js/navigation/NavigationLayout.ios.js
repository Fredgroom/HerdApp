import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { colours } from '../config/styles';
import { FeedContainer } from '../screens/Feed';
import { ScanIdContainer } from '../screens/ScanId';
import { SafetyContainer } from '../screens/Safety';
import { HerdContainer } from '../screens/Herd';
import { LogOutContainer } from '../screens/LogOut';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeedStack = createStackNavigator(
  {
    Feed: FeedContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
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
    }),
  }
);

export default createBottomTabNavigator(
  {
    Feed: { screen: FeedStack },
    ScanId: { screen: ScanIdStack },
    Safety: { screen: SafetyStack },
    Herd: { screen: HerdStack },
    LogOut: { screen: LogOutStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `md-wine`;
        } else if (routeName === 'ScanId') {
          iconName = `ios-qr-scanner`;
        } else if (routeName === 'Safety') {
          iconName = `ios-notifications`;
        } else if (routeName === 'Herd') {
          iconName = `ios-contacts`;
        } else if (routeName === 'LogOut') {
          iconName = `ios-log-out`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colours.blue,
    },
  }
);
