import { createSwitchNavigator } from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import { LogInStack } from './sharedStacks';
import { AuthLoading } from '../screens/AuthLoading';

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    LogIn: LogInStack,
    MainApp: NavigationLayout,
  },
  {
    initialRouteName: 'AuthLoading',
  },
  {
    mode: 'modal',
    headerMode: 'none',
    headerLayoutPreset: 'center',
  }
);
export default RootStack;
