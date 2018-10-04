import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../../config/styles';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
  },
  scanIdLink: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '3%',
    width: '47%',
    height: '30%',
    paddingHorizontal: 73,
    backgroundColor: 'transparent',
  },
});
