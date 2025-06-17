
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Text } from 'react-native'
import {  TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import Home from './screens/Home';
import Pay from './screens/Pay';
import Ginie from './screens/Ginie';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BottomTab from './BottomTab';

export type RootTabParamsList  = {
  Home: undefined
  Pay: undefined
  Ginie: undefined
}

const Bottom = createBottomTabNavigator()



function App() {

  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
