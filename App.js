import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//scren
import Login from './screen/Login'
import Home from './screen/Home'

const Stack = createStackNavigator();

const App = () => {

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login}
         options={{ title: 'applibro'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

