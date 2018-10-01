import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  feedHeaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    margin: width * 0.1,
    fontSize: height * 0.03,
    textAlign: 'center',
  },
  componentTitle: {
    fontSize: height * 0.02,
    marginLeft: width * 0.03,
  },
  moreLink: {
    fontSize: height * 0.02,
    marginRight: width * 0.03,
  },
});
