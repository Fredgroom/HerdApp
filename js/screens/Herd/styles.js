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
    height: height * 0.07,
  },
  tonightContainer: {
    marginLeft: width * 0.02,
    ...Platform.select({
      ios: {
        marginTop: '1%',
      },
      android: {
        marginTop: '5%',
      },
    }),
    width: width * 0.3,
    height: height * 0.07,
    backgroundColor: 'transparent',
  },
  jamesContainer: {
    marginLeft: width * 0.035,
    marginTop: height * 0.06,
    ...Platform.select({
      ios: {
        paddingBottom: '12%',
      },
      android: {
        paddingBottom: '15%',
      },
    }),
    width: '30%',
    backgroundColor: 'transparent',
  },
});
