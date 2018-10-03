import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  safetyContainer1: {
    marginLeft: width * 0.02,
    ...Platform.select({
      ios: {
        marginTop: height * 0.005,
      },
      android: {
        marginTop: height * 0.015,
      },
    }),
    backgroundColor: 'transparent',
    width: width * 0.48,
    height: height * 0.04,
  },
  safetyContainer2: {
    alignSelf: 'flex-end',
    marginRight: width * 0.02,
    ...Platform.select({
      ios: {
        marginTop: height * 0.59,
        paddingVertical: height * 0.035,
      },
      android: {
        marginTop: height * 0.63,
        paddingVertical: height * 0.035,
      },
    }),
    backgroundColor: 'transparent',
    width: width * 0.3,
    height: height * 0.04,
  },
});
