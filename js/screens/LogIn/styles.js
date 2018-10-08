import { StyleSheet } from 'react-native';
import { colours } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colours.pureWhite,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
  },
  mainAppLink: {
    width: '90%',
    height: '35%',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: '80%',
    marginBottom: '30%',
    alignSelf: 'center',
  },
});
