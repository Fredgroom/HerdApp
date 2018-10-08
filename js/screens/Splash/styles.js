import { StyleSheet } from 'react-native';
import { colours } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colours.pureWhite,
  },
  wrapper: {
    backgroundColor: colours.pureWhite,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastSlide: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colours.pureWhite,
  },
  lastSlideImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
