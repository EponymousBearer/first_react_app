import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container2: {
        flexDirection: "column",
        width: 375,
        height: 812,
    },
    back_icon: {
        marginTop: 40,
        marginLeft: 25,
        height: 24,
        width: 24,
        flexDirection: "row",
        alignItems: "flex-start",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    mailContainer: {
        marginBottom:20,
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between",
        borderBottomWidth: 1,
        borderBottomColor: '#ECEEF5',
    },
    textInput: {
        flex: 1,
        height: 40,
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
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 16,
        color: "#8083A3",
    },
    heading: {
        flex:1,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        lineHeight: 42,
        fontSize: 24,
        fontWeight: "bold",
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
    buttonContainer: {
        marginTop: 50,
        alignSelf: 'flex-end',
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
