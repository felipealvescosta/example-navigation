import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import App from './App';
import About from './About';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          name="App"
          component={App}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="About"
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}