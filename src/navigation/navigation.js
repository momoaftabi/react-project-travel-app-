import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/splash/splash.screen'
import Signup from '../screen/signup/signup.screen'

const Stack = createStackNavigator()
export default function Navstack() {
    return (
        <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
)}

