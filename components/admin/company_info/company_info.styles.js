import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    flexDirection: "row"
  },
  count: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  imageContainer: {
    alignItems: 'center',
  },

  profileImage: {
    resizeMode: 'contain',
    position: 'relative',
    zIndex: 1,
  },
  driveImage: {
    resizeMode: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  },
  header: {
    flexDirection: "column",
    width: 331,
    height: 500,
    borderRightWidth:1,
    borderRightColor:COLORS.linewhite
  },
  headerTitle: {
    marginTop:10,
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  buttonContainer: {
    marginTop: 50,
    alignSelf: 'flex-end',
  },
  heading: {
    fontSize:18,
    fontFamily: FONT.lato,
    lineHeight:27,
    fontWeight:"bold",
  },
  addButton: {
    width:36,
    height:36,
    backgroundColor: "#0263E0",
    borderRadius:100,
  },
  box:{
    width:960,
    height:324,
    marginTop:40,
    marginBottom:40,
    borderWidth:1,
  },
  rightContainer: {
    marginLeft:40
  }
});

export default styles;
