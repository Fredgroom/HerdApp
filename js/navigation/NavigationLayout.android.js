import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from 'react-navigation';
import {
  FeedStack,
  ScanIdStack,
  SafetyStack,
  HerdStack,
  ProfileStack,
} from './sharedStacks';

const renderIcon = (iconName, tintColor) => (
  <Icon name={iconName} size={25} color={tintColor} />
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

ProfileStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-person', tintColor),
};

export default createDrawerNavigator(
  {
    Feed: FeedStack,
    ScanId: ScanIdStack,
    Safety: SafetyStack,
    Herd: HerdStack,
    Profile: ProfileStack,
  },
  {
    drawerWidth: 200,
  }
);
