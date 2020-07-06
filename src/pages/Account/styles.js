import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 5 + Constants.statusBarHeight,
    paddingHorizontal: 32,
    backgroundColor: '#fff'
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profile:{
    marginLeft: 15,
  },
  nameText:{
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Poppins_400Regular',
  },
  buttonText:{
    color: '#B3B3B3',
    fontFamily: 'Poppins_400Regular',
  },
  menu:{
    borderTopWidth: 2,
    borderTopColor: 'rgba(0, 68, 140, 0.2)',
    marginTop: 18,
  },
  menuItem:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
  },
  menuItemTexts:{
    marginLeft: 15,
  }, 
  menuItemText:{
    color: '#00448C',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
  },
  menuItemText2:{
    color: '#B3B3B3',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
  }, 
  menuItemArrowImg:{
    position: 'absolute',
    right: 10,
  },
  line: {
    marginTop: 9,
    marginBottom: 9,
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 68, 140, 0.2)",
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: 32,
  }, 
  buttonLogout:{
    marginBottom: 15,
  },
  buttonLogoutText:{
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins_700Bold',
  }

});

export default styles;
