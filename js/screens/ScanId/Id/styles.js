import { StyleSheet, Dimensions } from 'react-native';
import { colours } from '../../../config/styles';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scanIdImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  scanIdLink: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '3%',
    width: '47%',
    height: '17%',
    paddingHorizontal: 73,
    backgroundColor: 'transparent',
  },
});
