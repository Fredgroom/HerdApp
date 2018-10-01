import { StyleSheet, Dimensions } from 'react-native';
import { colours, fonts } from '../../config/styles';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    color: colours.white,
    fontFamily: fonts.regular,
    marginVertical: 1,
    alignSelf: 'flex-start',
  },
  offer: {
    color: colours.white,
    fontFamily: fonts.bold,
    alignSelf: 'flex-start',
  },
  wideImage: {
    margin: 10,
    marginVertical: 5,
    justifyContent: 'flex-end',
    height: height * 0.2,
  },
  backgroundColor: {
    alignSelf: 'flex-start',
    backgroundColor: colours.transparentBlack,
    padding: height * 0.004,
    paddingRight: height * 0.004,
    margin: height * 0.001,
  },
});
