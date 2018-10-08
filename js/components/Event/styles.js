import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../config/styles';
import { fonts } from '../../config/styles';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    color: colours.offWhite,
    alignSelf: 'flex-start',
    padding: 3,
    paddingBottom: 3,
    fontFamily: fonts.bold,
  },
  subHeading: {
    color: colours.offWhite,
    textAlign: 'right',
    fontFamily: fonts.regular,
  },
  address: {
    color: colours.offWhite,
    backgroundColor: colours.transparentBlack,
    marginVertical: 1,
    padding: 3,
    paddingBottom: 3,
    alignSelf: 'flex-start',
    fontFamily: fonts.regular,
    textAlign: 'right',
  },
  wideImage: {
    margin: 10,
    marginVertical: 5,
    height: height * 0.2,
    justifyContent: 'center',
  },
  month: {
    color: colours.offWhite,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
  day: {
    color: colours.offWhite,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  textContainer: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dateContainer: {
    margin: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colours.transparentBlack,
    justifyContent: 'center',
  },
  titleContainer: {
    margin: 0,
    justifyContent: 'center',
  },
  titleBackground: {
    backgroundColor: colours.transparentBlack,
    margin: 1,
    padding: 4,
    paddingHorizontal: 0,
  },
  subHeadingBackground: {
    backgroundColor: colours.transparentBlack,
    margin: 1,
    padding: 4,
    paddingLeft: 0,
  },
});
