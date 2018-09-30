import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../config/styles';
import { fonts } from '../../config/styles';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    color: colours.white,
    backgroundColor: colours.transparentBlack,
    alignSelf: 'flex-start',
    padding: 3,
    paddingBottom: 3,
    fontFamily: fonts.bold,
  },
  address: {
    color: colours.white,
    backgroundColor: colours.transparentBlack,
    marginVertical: 1,
    padding: 3,
    paddingBottom: 3,
    alignSelf: 'flex-start',
    fontFamily: fonts.regular,
  },
  wideImage: {
    margin: 10,
    marginVertical: 5,
    justifyContent: 'flex-end',
    height: height * 0.2,
  },
});
