import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container2: {
        flexDirection: "column",
        width: 375,
        height: 812,
        marginHorizontal: 20,
        alignSelf:"center"
    },
    image: {
        alignItems: "center",
        marginTop:80,
    },
    cancelbutton: {
        marginTop: 40,
        height: 40,
        width: 92,
        flexDirection: "row",
        alignSelf: "flex-end",
        backgroundColor: "#F6F6F6",
        borderRadius: 6
    },

    cancelButtonText: {
        color: "#8083A3",
        marginLeft: 25,
        marginTop: 10,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginVertical: 20,
        marginTop: -110
    },
    mailContainer: {
        marginBottom: 20,
        color: "#8083A3"
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: '#ECEEF5',
    },
    textInput: {
        flex: 1,
        height: 40,
        color: "#8083A3"
    },
    text: {
        color: "#8083A3"
    },
    icon: {
        width: 16,
        height: 16,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginLeft: 20,
        marginBottom: 15,
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 15,
        color: "#8083A3",
    },
    heading: {
        flex: 1,
        textAlign: "center",
        marginTop: 80
    },
    header: {
        lineHeight: 52,
        fontSize: 32,
        fontWeight: "500",
        marginTop:-40
    },
    headerTitle: {
        fontSize: 16,
        color: "#8083A3",
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    addButton: {
        width: 36,
        height: 36,
        backgroundColor: "#0263E0",
        borderRadius: 100,
    },
    box: {
        width: 960,
        height: 324,
        marginTop: 40,
        marginBottom: 40,
        borderWidth: 1,
    },
    rightContainer: {
        marginLeft: 40
    }
});

export default styles;
