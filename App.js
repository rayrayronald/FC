import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Import the screens
import Main from './Components/Main';
import Chat from './Components/Chat';
// Import React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const navigator = createStackNavigator()




function MyStack() {
  return (
    <navigator.Navigator>
      <navigator.Screen name="Main" component={Main} />
      <navigator.Screen name="Chat" component={Chat} />
    </navigator.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



// // Create the navigator
// const navigator = createStackNavigator({
//   Main: { screen: Main },
//   Chat: { screen: Chat },
// });
// // Export it as the root component
// export default navigator

