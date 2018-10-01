import { StyleSheet, Dimensions } from 'react-native';
import { colours, fonts } from '../../../config/styles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  promoContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  backgroundColor: {
    alignSelf: 'flex-start',
    backgroundColor: colours.transparentBlack,
    padding: height * 0.004,
    paddingRight: height * 0.01,
    margin: height * 0.001,
    marginTop: 0,
  },
  offer: {
    color: colours.white,
    fontFamily: fonts.bold,
    alignSelf: 'flex-start',
    paddingHorizontal: height * 0.0045,
  },
  title: {
    color: colours.white,
    fontFamily: fonts.regular,
    marginVertical: 1,
    alignSelf: 'flex-start',
    paddingHorizontal: height * 0.0045,
  },
  headerImage: {
    width: width * 0.95,
    height: height * 0.32,
  },
  scanCodeContainer: {
    height: 350,
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  scanCodeText: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  scanCodeImageUrl: {
    alignSelf: 'center',
    height: height * 0.23,
    width: width * 0.45,
  },
});
