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
  alertButton: {
    marginLeft: '5%',
    height: '75%',
    width: '90%',
    backgroundColor: 'transparent',
  },
  incidentReportingLink: {
    height: '30%',
    width: '50%',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    marginTop: '2%',
  },
});
