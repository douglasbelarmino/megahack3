import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00448C'
  },
  logoImg:{
    width: 100,
    height: 50,
    backgroundColor: '#fff'
  },
  inputContainer:{
    width: '90%',
    marginTop: 35,

  },
  input:{
    width: '100%',
    height: 50,
    backgroundColor: '#00448C',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 15,
    fontFamily: 'Poppins_400Regular',
  },
  message: {
    textAlign: "center",
    color: '#fff',
    fontSize: 17,
    marginTop: 10,
    fontFamily: 'Poppins_400Regular',
  },
  button:{
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#00448C',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  passwordButton:{
    marginTop: 10,
  },
  passwordButtonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
  },
  facebookView:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  facebookText:{
    color: 'rgba(235, 235, 235, 0.7)',
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
  },
  facebookButton:{
    backgroundColor: '#1867BD',
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 10,
  },
  facebookButtonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: 'Poppins_400Regular',
  },
  SignUpButton:{
    marginTop: 50,
    textAlign: "center"
  },
  SignUpButtonText: {
    color: '#fff',
    textAlign: "center",
    fontFamily: 'Poppins_400Regular',

    fontSize: 19,
  },
})

export default styles;