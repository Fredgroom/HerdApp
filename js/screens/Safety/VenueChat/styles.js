import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
  },
  safetyContainer: {
    marginLeft: width * 0.5,
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
});
