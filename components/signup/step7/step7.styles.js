import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        width: 375,
        height: 812,
        backgroundColor: "#F3F4F9"
    },
    container1: { flex: 0.40, marginHorizontal: 20 },
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
    container2: { flex: 0.8, alignItems: "center" },
    container3: { flex: 0.2, alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 },
    subcontainer: {
        flex:0.25,
        marginTop: 20,
        alignItems: 'flex-start',
        marginHorizontal: 20
    },
    openbutton: {
        flexDirection:"row",
        paddingHorizontal:10,

    },
    headerTitle: {
        fontSize: 14,
        borderRadius: 8,
        borderWidth: 1,
        color: "#8083A3",
        backgroundColor: "#F3F4F9",
        borderColor: "#F3F4F9",
        padding: 6
    },
    container4: { flex: 0.9, flexDirection: "column", marginHorizontal: 20 },
    dropdownButton: {
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        height: 32,
        width:94,
        padding: 5,
        borderWidth: 1,
        borderColor: 'white',
        shadowRadius: 10,
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowColor: COLORS.gray
    },
    dropdownButtonText: {
        fontSize: 16,
    },
    optionsContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        minWidth: 150,
        shadowRadius: 10,
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowColor: COLORS.gray
    },
    newDefectOption: {
        borderWidth: 1,
        backgroundColor: 'red',
        padding: 1,
        margin: 3,
        alignSelf: "flex-start",
        borderRadius: 5,
        color: "#8083A3",
        backgroundColor: "#F3F4F9",
        borderColor: "#F3F4F9",
        fontSize: 14
    },
    optionButton: {
        padding: 10,
        borderColor: 'black',
        alignItems: 'flex-start',
    },
    optionText: {
        fontSize: 16,
    },
    homebar: {
        width: 375,
        alignItems: 'center',
        height: 6,
        marginTop:30
    }
});

export default styles;
