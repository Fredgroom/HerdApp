import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../../config/styles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  feedHeaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: fonts.regular,
  },
  headingText: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: width * 0.03,
    marginVertical: 10,
    fontFamily: fonts.regular,
  },
  componentTitle: {
    fontSize: height * 0.02,
    marginLeft: width * 0.03,
    fontFamily: fonts.regular,
  },
  moreLink: {
    fontSize: height * 0.02,
    marginRight: width * 0.03,
    fontFamily: fonts.regular,
  },
});
