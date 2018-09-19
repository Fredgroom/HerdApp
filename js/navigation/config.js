import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colours, fonts } from '../config/styles';

const MenuButton = ({ navigation }) => (
  <Icon
    name="md-menu"
    size={25}
    color={colours.black}
    onPress={navigation.openDrawer}
    style={{ marginLeft: fonts.baseSize * 0.67 }}
  />
);

export const sharedNavigationOptions = (navigation) => ({
  ...Platform.select({
    android: {
      headerLeft: <MenuButton navigation={navigation} />,
    },
  }),
});
