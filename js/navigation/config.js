import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colours, fonts } from '../config/styles';

const HamburgerIcon = ({ navigation }) => (
  <Icon
    name="md-menu"
    size={25}
    color={colours.black}
    onPress={navigation.openDrawer}
    style={{ marginLeft: fonts.baseSize * 0.67 }}
  />
);

export const sharedNavigationOptions = (navigation) => ({
  headerTitleStyle: {
    fontFamily: fonts.regular,
  },
  headerTitleStyle: {
    color: colours.black,
  },
  headerBackTitleStyle: {
    color: colours.blue,
  },
  headerTintColor: colours.blue,
  ...Platform.select({
    android: {
      headerLeft: <HamburgerIcon navigation={navigation} />,
    },
  }),
});
