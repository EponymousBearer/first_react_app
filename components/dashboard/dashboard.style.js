import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    flexDirection: "col",
    alignItems: "center",
    marginRight: 200,
    gap: 34,

  },
  image: {
    margin: 31,
    borderWidth: 1,
    borderRadius: 8,
    width: 40,
    height: 40
  },
  box: {
    margin: 22,
    marginTop: 110,
    width: 40, /* Adjust the width as needed */
    height: 40, /* Adjust the height as needed */
    borderColor: '#ECEEF5', /* Set the background color */
    borderWidth: 1, /* Set the border properties */
    borderRadius: 5, /* Set the border radius for rounded corners */
  },
  sidebar: {
    marginLeft: -20,
    width: 84,
    height: 720,
    backgroundColor: COLORS.white,
  },
  count: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 50
  },
  headerimage: {
    marginTop: -37
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: 960,
    height: 148,
    backgroundColor: COLORS.purple,
    borderRadius: 10,
  },
  headerTitle: {
    marginTop: 35,
    marginLeft: 40,
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
  },
  headerDes: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    opacity: 0.5
  },
});

export default styles;
