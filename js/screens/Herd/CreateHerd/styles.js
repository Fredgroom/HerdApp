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
  buttonContainer: {
    flexDirection: 'row',
  },
  trackingContainer: {
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
    width: width * 0.3,
    height: height * 0.04,
  },
  tonightContainer: {
    marginLeft: width * 0.36,
    backgroundColor: 'red',
    ...Platform.select({
      ios: {
        marginTop: height * 0.005,
      },
      android: {
        marginTop: height * 0.015,
      },
    }),
    width: width * 0.3,
    height: height * 0.04,
    backgroundColor: 'transparent',
  },
});
