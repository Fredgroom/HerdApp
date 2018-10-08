import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../../config/styles';
import { fonts } from '../../../config/styles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.pureWhite,
  },
  title: {
    color: colours.offWhite,
    fontFamily: fonts.regular,
  },
  secondHeading: {
    color: colours.offWhite,
    fontFamily: fonts.bold,
  },
  titleContainer: {
    backgroundColor: colours.black,
    padding: 2,
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
    fontSize: height * 0.025,
    marginVertical: 3,
    fontFamily: fonts.regular,
  },
  backgroundColour: {
    backgroundColor: colours.transparentBlack,
    alignSelf: 'flex-start',
    padding: height * 0.01,
    margin: height * 0.001,
  },
});
