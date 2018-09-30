import { createStackNavigator } from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import { styles } from './styles';

const RootStack = createStackNavigator(
  {
    Layout: NavigationLayout,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    headerLayoutPreset: 'center',
    headerBackTitleStyle: styles.back,
  }
);
export default RootStack;
