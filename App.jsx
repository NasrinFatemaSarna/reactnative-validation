
// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './search/screen/HomeScreen';

const Stack = createNativeStackNavigator();


const App = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
      headerShown: false, }}  >
        <Stack.Screen name={"HOME"}component={HomeScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}



export default App

const styles = StyleSheet.create({})



















