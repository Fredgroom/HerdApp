import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../config/styles';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    color: colours.white,
    backgroundColor: colours.black,
    width: 105,
  },
  offer: {
    color: colours.white,
    backgroundColor: colours.black,
    width: 170,
  },
  wideImage: {
    margin: 10,
    marginVertical: 5,
    justifyContent: 'flex-end',
    height: height * 0.2,
  },
});
