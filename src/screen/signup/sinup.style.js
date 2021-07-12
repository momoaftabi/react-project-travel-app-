import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
      },
      topText: {
     fontSize:25,
     fontWeight:"bold",
     color:"#68766A",
     marginBottom: 20,
     alignSelf:"center"
     
      },
  
      inputView: {
        backgroundColor: "#FFF488",
        borderRadius: 30,
        width: "70%",
        height: 50,
        marginBottom: 20,
        alignSelf: "center"
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
     
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
     
      loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#FF8254",
        alignSelf: "center"

      },

      backgroundImage:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
      },
      loginText:{
          fontWeight:"bold",
          color:"white"
      }
});