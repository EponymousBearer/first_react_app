import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";
import { block } from "react-native-reanimated";

const styles = StyleSheet.create({
  table: {
    borderColor: "black",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginVertical:10,
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  },
  cell: {
    fontWeight: "600",
    fontSize:14,
    flex: 1,
    padding: 12,
    paddingLeft:18,
  },
  imageCell: {
    width: 40,
    height: 40,
  },
  tagCell: {
    flex: 0.55,
    backgroundColor: "#F0EDFF",
    fontWeight:"500",
    lineHeight:45,
    height:45,
    fontSize:16,
    color: "#6B59CC",
    borderRadius:15,
    alignItems:"center",
    textAlign:"center",
  },
  buttonCell: {
    flex: 0.24,
    borderRadius:15,
    borderColor: "#ECEEF5",
    alignItems: "center",
    justifyContent: "center",
    height:45,
    borderWidth:1,
    marginLeft:10,
  },
  buttonText: {
    marginBottom:13,
    color: "#6B59CC",
    fontWeight: "bold",
    fontSize:22,
  },
  formCell: {
    flex: 1,
    padding: 10,
  },
});

export default styles;