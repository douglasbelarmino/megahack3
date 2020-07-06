import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
  },
  inputText:{
    color: '#3D3D3D',
    fontSize: 22,
    fontFamily: 'Poppins_400Regular',
  },
  genres:{
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  genre:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  genreText:{
    color: '#00448C',
    textAlign: 'center',
    fontWeight: "bold",
    fontFamily: 'Poppins_400Regular',
  },
  genreSelected: {
    borderColor: '#00448C',
    borderWidth: 2,
  },
})

export default styles;