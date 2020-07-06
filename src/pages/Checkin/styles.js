import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  checkin: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkinSuccess: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkinSuccessText: {
    color: "#00448C",
    fontSize: 30,
    marginBottom: 15,
    fontFamily: 'Poppins_700Bold',
  },
  account: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 5 + Constants.statusBarHeight,
  },
  accountText: {
    color: "#00448C",
    fontSize: 35,
    textAlign: "center",
    fontFamily: 'Poppins_400Regular',
  },
  line: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 68, 140, 0.2)",
  },
  amountValueText: {
    color: "#00448C",
    fontSize: 40,
    textAlign: "center",
    fontFamily: 'Poppins_700Bold',
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemKeyText: {
    fontSize: 20,
    color: "#00448C",
    fontFamily: 'Poppins_700Bold',
    marginBottom: 7,
  },
  itemValueText: {
    fontSize: 20,
    color: "#00448C",
    fontFamily: 'Poppins_400Regular',
    marginBottom: 7,
  },
  scoreTitleText: {
    color: "#00448C",
    fontSize: 20,
    textAlign: "center",
    fontFamily: 'Poppins_400Regular',
  },
  scoreValue: {
    color: "#FCC12A",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    fontFamily: 'Poppins_400Regular',
  },
  bar: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  progressBar: {
    width: "100%",
    height: 22,
    backgroundColor: "#E0E0E0",
  },
  progressBarScore: {
    backgroundColor: "#FCC12A",
    width: "20%",
    height: 22,
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
    fontFamily: 'Poppins_400Regular',
  },
  scoreItemValueText: {
    color: "#FCC12A",
    fontSize: 15,
    fontSize: 19,
    fontFamily: 'Poppins_400Regular',
  },
  buttonView: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "#00448C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
});

export default styles;
