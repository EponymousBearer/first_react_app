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
});

export default styles;
