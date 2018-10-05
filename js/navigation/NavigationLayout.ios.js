import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import {
  FeedStack,
  ScanIdStack,
  SafetyStack,
  HerdStack,
  ProfileStack,
} from './sharedStacks';

export default createBottomTabNavigator(
  {
    Feed: { screen: FeedStack },
    ScanId: { screen: ScanIdStack },
    Safety: { screen: SafetyStack },
    Herd: { screen: HerdStack },
    Profile: { screen: ProfileStack },
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
        } else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);
