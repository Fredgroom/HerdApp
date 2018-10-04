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
  createHerdContainer: {
    marginLeft: width * 0.36,
    ...Platform.select({
      ios: {
        marginTop: '1%',
      },
      android: {
        marginTop: '3%',
      },
    }),
    backgroundColor: 'transparent',
    width: width * 0.3,
    height: height * 0.05,
  },
  tonightContainer: {
    marginLeft: width * 0.02,
    ...Platform.select({
      ios: {
        marginTop: '1%',
      },
      android: {
        marginTop: '3%',
      },
    }),
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: 'transparent',
  },
  jamesContainer: {
    marginLeft: width * 0.02,
    marginTop: height * 0.07,
    ...Platform.select({
      ios: {
        paddingBottom: '10%',
      },
      android: {
        paddingBottom: '10%',
      },
    }),
    width: '30%',
    backgroundColor: 'transparent',
  },
});
