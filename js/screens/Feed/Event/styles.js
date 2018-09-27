import { StyleSheet } from 'react-native';
import { colours } from '../../../config/styles';

export const styles = StyleSheet.create({
  text: {
    color: colours.white,
    backgroundColor: colours.black,
    margin: 0.5,
    width: 135,
  },
  wideImage: {
    width: 500,
    height: 120,
  },
  headerImage: {
    margin: 8,
    height: 200,
  },
  tabImage: {
    width: 100,
    height: 100,
  },
});
