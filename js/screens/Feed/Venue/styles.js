import { StyleSheet, Dimensions } from 'react-native';
import { colours, fonts } from '../../../config/styles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    color: colours.white,
    fontFamily: fonts.regular,
  },
  titleContainer: {
    backgroundColor: colours.black,
    alignSelf: 'flex-start',
    padding: width * 0.01,
    opacity: 0.6,
  },
  headerImage: {
    width: width * 0.95,
    height: height * 0.4,
    flexGrow: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  secondaryImage: {
    width: width * 0.275,
    height: width * 0.275,
  },
  secondaryImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  description: {
    alignSelf: 'center',
    width: width * 0.94,
    marginVertical: height * 0.025,
    padding: 2,
    fontFamily: fonts.regular,
  },
});
