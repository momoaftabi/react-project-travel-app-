import React from "react";
import { ImageBackground, Text, View, TouchableOpacity} from "react-native";
import styles from './splash.style';


const image =  require('../../../asset/home.jpg');
export default function SplashScreen() {
    return (
<View style={styles.container}>
<ImageBackground source={image} style={styles.image} >
<Text style={styles.textcontainer}>Wanna travel The World?</Text>
<TouchableOpacity 
style={styles.buttonContainer}
onPress={() => {this.props.navigation.navigate('Signup')} 
} >
<Text style={styles.buttontext} >Let's start planning!</Text>
</TouchableOpacity>
</ImageBackground>
</View>
  );
}