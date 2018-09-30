import { Platform } from 'react-native';

export const colours = {
  white: '#f9f9f9',
  black: '#090909',
  transparentBlack: 'rgba(9,9,9,0.6)',
  blue: '#0080ff',
};

export const fonts = {
  thin: 'Montserrat-Thin',
  extraLight: 'Montserrat-ExtraLight',
  light: 'Montserrat-Light',
  ...Platform.select({
    ios: {
      regular: 'Montserrat',
    },
    android: {
      regular: 'Montserrat-Regular', // for some reason, Android needs this
    },
  }),
  semiBold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold',
  baseSize: 16,
};
