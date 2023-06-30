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
import styles from "./step6.styles";
import { COLORS, SIZES, images } from "../../../constants";
import ScreenBtn from "../../sub_components/buttons/ScreenBtn/ScreenBtn";
import step1 from '../step1/step1';
import { useNavigation } from '@react-navigation/native';

const Step6 = () => {
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
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.heading}>
                    <Text style={styles.header}>Enter Position & Dept</Text>
                    <Text style={styles.headerTitle}>Enter your details to proceed further</Text>
                </View>

                <View style={styles.container}>

                    <View style={styles.mailContainer}>
                        <Text style={styles.text}>Email</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter Your Email"
                                value={email}
                                onChangeText={handleEmailChange}
                            />
                            <Image
                                style={styles.icon}
                                source={images.mail}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.mailContainer}>
                        <Text style={styles.text}>First and Last name</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter Your Name"
                                value={name}
                                onChangeText={handleNameChange}
                            />
                            <Image
                                style={styles.icon}
                                source={images.name}
                            />
                        </View>
                    </View>

                    <View style={styles.mailContainer}>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter Your Password"
                                value={password}
                                onChangeText={handlePasswordChange}
                                secureTextEntry
                            />
                            <Image
                                style={styles.icon}
                                source={images.password}
                            />
                        </View>
                    </View>

                    <View style={styles.mailContainer}>
                        <Text style={styles.text}>Confirm Password</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Confirm Your Password"
                                value={confirmPassword}
                                onChangeText={handleConfirmPasswordChange}
                                secureTextEntry
                            />
                            <Image
                                style={styles.icon}
                                source={images.confirm}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        value={agree}
                        onValueChange={handleAgreeToggle}
                    />
                    <Text style={styles.checkboxLabel}>I agree to the conditions</Text>
                </View>

                <View style={{ alignSelf: 'center', marginBottom: 30 }}>
                    <ScreenBtn paddingHorizontal={170} textcolor={COLORS.lightWhite} text={"Continue"} marginLeft={-30} handlePress={handleSignUp} disabled={!email || !agree} bgcolor={COLORS.defaultbtn}>
                        <Button
                            title="Continue"
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

export default Step6;