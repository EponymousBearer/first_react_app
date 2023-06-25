import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    flexDirection: "row"
  },
  count:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: 331,
    height: 500,
    backgroundColor: COLORS.gray
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
