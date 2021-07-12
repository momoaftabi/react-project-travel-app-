import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Button,TouchableOpacity,TextInput,} from "react-native";
import styles from './sinup.style';


const image =  require('../../../asset/login.jpg');


export default function SignupScreen() {
  const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
  return (
    
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage} >
<Text  style={styles.topText}>Please login first to start!</Text>
    <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#AAAAAA"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
    };
