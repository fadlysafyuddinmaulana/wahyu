// In App.js in a new project

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/view/SplashScreen';
import Home from './src/view/Home';
import Content_1 from './src/view/Content/Content_1';
import Content_2 from './src/view/Content/Content_2';
import Content_3 from './src/view/Content/Content_3';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Content_1" component={Content_1} />
        <Stack.Screen name="Content_2" component={Content_2} />
        <Stack.Screen name="Content_3" component={Content_3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
