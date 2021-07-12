import 'react-native-gesture-handler';
import React from "react";
import Navstack from './src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>   
      <Navstack/>
    </NavigationContainer>   
  );
  }



export default App;