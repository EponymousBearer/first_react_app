import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    CheckBox,
    Button,
    ScrollView,
    TouchableOpacity
} from "react-native";
import styles from "./step7.styles";
import { COLORS, SIZES, images } from "../../../constants";
import ScreenBtn from "../../sub_components/buttons/ScreenBtn/ScreenBtn";
import step1 from '../step1/step1';
import { useNavigation } from '@react-navigation/native';

const Step7 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const navigation = useNavigation()

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
    };

    const handleAgreeToggle = () => {
        setAgree(!agree);
    };

    const handleSignUp = () => {
        if (email && password && confirmPassword && agree) {
            // Perform sign-up logic here
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            console.log('Agreed to conditions:', agree);
            navigation.navigate('step3');
        } else {
            // Display error or validation message
            console.log('Please enter all required information and agree to the conditions.');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container2}>

                <View style={{ marginTop: 7 }}>
                    <Image source={images.mobilebar}></Image>
                </View>

                <View style={styles.cancelbutton}>
                    <TouchableOpacity onPress={step1}>
                        <Text style={styles.cancelButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.image}>
                    <Image source={images.thankyou}></Image>
                </View>

                <View style={styles.heading}>
                    <Text style={styles.header}>Thank you</Text>
                    <Text style={styles.headerTitle}>We sent confirmation email to catherine.shaw@gmail.com</Text>
                </View>



                <View style={{ alignSelf: 'center', marginBottom: 30 }}>
                    <ScreenBtn paddingHorizontal={170} textcolor={COLORS.lightWhite} text={"Go to Dashboard"} marginLeft={-60} handlePress={handleSignUp} disabled={!email || !agree} bgcolor={COLORS.defaultbtn}>
                        <Button
                            title="Go to Dashboard"
                            onPress={handleSignUp}
                            disabled={!email || !agree}
                        />
                    </ScreenBtn>
                </View>

                <View style={{ alignItems: 'center', marginBottom: -6 }}><Image source={images.homebar}></Image></View>
            </View>
        </ScrollView>
    );
}

export default Step7;