import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        width: 375,
        height: 812,
        backgroundColor: "#F3F4F9"
    },
    container1: { flex: 0.15, marginHorizontal: 20},
    container2: {flex:1},
    heading: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginVertical: 25
    },
    header: {
        lineHeight: 42,
        fontSize: 24,
        fontWeight: "bold",
    },
    container3: { flex: 0.05, flexDirection: "column", marginHorizontal: 20,},
    homebar: {
        width: 375,
        alignItems: 'center',
        height: 6,
        marginTop:30
    }
});

export default styles;
