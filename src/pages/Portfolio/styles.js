import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 5 + Constants.statusBarHeight,
    paddingHorizontal: 32,
    backgroundColor: '#fff'
  },
  titleText:{
    fontSize: 35,
    color: '#00448C',
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },
  categories:{
    flexDirection: 'row',
    marginTop: 16,
  },
  category:{
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#00448C',
    borderRadius: 8,
    marginRight: 8,
  },
  categoryText:{
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular'
  },
  line: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 68, 140, 0.2)",
  },
  drinks: {

  },
  drink:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  drinkInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  drinkInfoText:{
    fontSize: 17,
    color: '#00448C',
    fontFamily: 'Poppins_400Regular'
  },
  drinkInfoText2:{
    fontSize: 12,
    color: '#686868',
    fontFamily: 'Poppins_400Regular'
  },
  drinkAmountText:{
    fontSize: 20,
    color: '#00448C',
    fontFamily: 'Poppins_700Bold',
  },
  centeredView: {
    width: '100%',
    position:'absolute',
    bottom: 0,
  },
  modalView: {
    width: '100%',
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalTitleText:{
    fontSize: 30,
    fontFamily: 'Poppins_400Regular'
  },
  controls:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  controlButton:{
    width: 60,
    height: 60,
    borderColor: '#00448C',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    width: '50%',
    height: 30,
    borderBottomWidth: 2,
    borderColor: 'rgba(0, 68, 140, 0.2)',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular'
  },
  button:{
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#00448C',
    borderRadius: 8,
    marginRight: 8,
    marginTop: 20,
  },
  buttonText:{
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular'

  }

});

export default styles;
