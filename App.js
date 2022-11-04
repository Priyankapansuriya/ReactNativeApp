import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';


const App = () => {

  const Stack = createNativeStackNavigator();  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{
          headerShown:false,
        }}>
          {(props)=> <Home {...props} channelName={"E-Learning"}/>}
        </Stack.Screen>
        <Stack.Screen name="About" component={About} 
          options={{
          headerTitleStyle:{
            fontSize:25,
          },
          headerTitleAlign:"center",
        }} 
        />
        <Stack.Screen name="Contact" component={Contact} 
          options={{
          headerTitleStyle:{
            fontSize:25,
          },
          headerTitleAlign:"center",
        }} 
        />
        <Stack.Screen name="Course" component={Course}
        options={{
          headerTitleStyle:{
            fontSize:25,
          },
          headerTitle:"Courses",
          headerTitleAlign:"center",
        }} />
        <Stack.Screen name="User" component={UserData} 
          options={{
          headerTitleStyle:{
            fontSize:25,
          },
          headerTitle:"User Data",
          headerTitleAlign:"center",
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App


