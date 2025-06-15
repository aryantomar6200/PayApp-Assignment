
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Pay from './screens/Pay';
import Ginie from './screens/Ginie';
import { NavigationContainer } from '@react-navigation/native';

export type RootStacParamsList = {
  Home: undefined
  Pay: undefined
  Ginie: undefined
}

const Stack = createNativeStackNavigator<RootStacParamsList>()

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Pay'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Pay' component={Pay} options={{ headerShown: false }} />
        <Stack.Screen name='Ginie' component={Ginie} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
