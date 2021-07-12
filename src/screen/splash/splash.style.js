import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    flex: 1,
  },
  buttonContainer: {
    width: 180,
    height: 60,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35,
    position:'absolute',
    top:420,
    left:20,
  },
  image: {
    flex:1,
    justifyContent:'center',
    position:'relative'
  },
  buttontext: {
    color: "#00bfff",
    fontSize: 16,
   
    fontWeight: "bold",
    textAlign: "center",
  
  },
  textcontainer:{
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily:'Roboto',
    textAlign: "left",
    position:'absolute',
    top:320,
    left:25,
  },
  text: {
    color: "#00bfff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  
  }
});