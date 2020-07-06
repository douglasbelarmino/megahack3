import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  search:{
    width: '90%',
    position: 'absolute',
    zIndex: 999,
    marginTop: 50,
    
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  searchText:{
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
  },
  searchInput:{
    fontSize: 17,
    color: '#B3B3B3',
    fontFamily: 'Poppins_400Regular'
  },
  maps: {
    position: "relative",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default styles;
