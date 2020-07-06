import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5 + Constants.statusBarHeight,
    paddingHorizontal: 32,
    backgroundColor: "#fff",
  },
  titleView: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  titleViewText: {
    color: "#FCC12A",
    fontSize: 20,
    fontFamily: 'Poppins_400Regular'
  },
  scoreText: {
    color: "#C4C4C4",
    fontSize: 15,
    fontFamily: 'Poppins_400Regular'
  },
  titleViewText2: {
    fontSize: 15,
    color: "#C4C4C4",
    fontFamily: 'Poppins_400Regular'
  },
  scorePople: {
    marginTop: 15,
    width: "100%",
  },
  buttons: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: "50%",
    backgroundColor: "#00448C",
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#00448C",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontFamily: 'Poppins_400Regular'
  },
  scoreItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  scoreScore: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreItemNameText: {
    color: "#FCC12A",
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'Poppins_400Regular'
  },
  scoreItemValueText: {
    color: "#C4C4C4",
    fontSize: 15,
    fontSize: 19,
    fontFamily: 'Poppins_400Regular'
  },
  line: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 68, 140, 0.2)",
  },
  scoreKeyText: {
    fontSize: 25,
    color: "#00448C",
    fontFamily: 'Poppins_400Regular'
  },
  scoreValueText: {
    fontSize: 35,
    color: "#00448C",
    fontFamily: 'Poppins_700Bold',
  },
  checkinText: {
    color: "#00448C",
    fontSize: 20,
    alignSelf: "flex-start",
    fontFamily: 'Poppins_400Regular'
  },
  checkins: {
    width: "100%",
  },
  checkin: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  checkinCheckin: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkinNameText: {
    color: "#FCC12A",
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'Poppins_400Regular'
  },
  checkinValueText: {
    color: "#FCC12A",
    fontSize: 15,
    fontFamily: 'Poppins_400Regular'
  },
});

export default styles;
