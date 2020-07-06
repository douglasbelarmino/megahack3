import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


const styles = StyleSheet.create({
  container:{
    paddingTop: 20 + Constants.statusBarHeight,
    height: '100%',
    justifyContent: 'space-between'
  },
  header:{
    paddingHorizontal: 32,
  },
  body:{
    paddingHorizontal: 32,
  },
  headerText:{
    marginTop: 50,
    fontSize: 23,
    fontFamily: 'Poppins_400Regular',
  },
  button:{
    backgroundColor: '#00448C',
    height: 80,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
  }

});

export default styles;
