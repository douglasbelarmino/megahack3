import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    paddingHorizontal: 32,
    marginTop: 20,
    flexDirection: "column",
  },
  headerTitle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    
  },
  headerTitleText: {
    color: "#00448C",
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
  },
  headerTitleStar: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  hedaerTitleStarImg: {
    backgroundColor: "#F8D417",
  },
  headerTitleStarText: {
    color: "#00448C",
    fontFamily: 'Poppins_700Bold',
    fontSize: 30,
    marginLeft: 8,
  },
  headerStatusText: {
    color: "#686868",
    fontSize: 15,
    fontFamily: 'Poppins_400Regular'
  },
  headerDescriptionText: {
    fontSize: 16,
    color: "#00448C",
    marginTop: 15,
    fontFamily: 'Poppins_400Regular'
  },
  heart: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  heartText: {
    color: "#E21B1B",
    fontFamily: 'Poppins_700Bold',
    marginLeft: 10,
    fontSize: 19,
  },
  scoreTitle: {
    marginTop: 15,
    fontSize: 30,
    color: "#00448C",
    fontFamily: 'Poppins_700Bold',
  },
  score: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scoreScore: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreScoreText: {
    color: "#FCC12A",
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'Poppins_400Regular',
  },
  scoreText: {
    color: "#FCC12A",
    fontSize: 15,
    fontSize: 19,
    fontFamily: 'Poppins_400Regular',
  },
  body:{
    paddingHorizontal: 32,
    marginTop: 15
  },
  bodyText:{
    color: "#00448C",
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',

  },
  drinks:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  drink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drinkText:{
    color: '#00448C',
    fontSize: 17,
    fontFamily: 'Poppins_700Bold',

  }, drinkText2:{
    color: '#686868',
    fontSize: 12
  },
  footer:{
    paddingHorizontal: 32,
    marginTop: 15
  },
  maps: {
    width: '100%',
    height: 200,
  },
  addressKeyText:{
    color: '#00448C',
    fontSize: 15,
    marginTop: 15,
    fontFamily: 'Poppins_400Regular',
  },
  addressValueText:{
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
  }
});

export default styles;
