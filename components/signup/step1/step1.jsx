import React, { useState } from 'react';
import { View, Text, Image, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import styles from './step1.styles';
import { COLORS, images } from '../../../constants';
import ScreenBtn from '../../sub_components/buttons/ScreenBtn/ScreenBtn';
import { useNavigation } from '@react-navigation/native';

const Step1 = () => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleAgreeToggle = () => {
    setAgree(!agree);
  };

  const handleSignUp = () => {
    if (email && agree) {
      // Perform sign-up logic here
      console.log('Email:', email);
      console.log('Agreed to conditions:', agree);
      navigation.navigate('Step2');
    } else {
      // Display error or validation message
      console.log('Please enter a valid email and agree to the conditions.');
    }
  };

  return (
      <View style={styles.container2}>
        <View style={{ marginTop: 7 }}>
          <Image source={images.mobilebar} />
        </View>

        <View style={styles.back_icon}>
          <Image source={images.back_icon} />
        </View>

        <View style={styles.heading}>
          <Text style={styles.header}>Welcome to Flex N Gate</Text>
          <Text style={styles.headerTitle}>Enter your details to proceed further</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.mailContainer}>
            <Text>Email</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Your Email"
                onChangeText={handleEmailChange}
              />
              <Image style={styles.icon} source={images.mail} />
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox} value={agree} onValueChange={handleAgreeToggle} />
            <Text style={styles.checkboxLabel}>I agree to the conditions</Text>
          </View>

          <View style={{ alignSelf: 'center' }}>
            <ScreenBtn
              paddingHorizontal={170}
              textcolor={COLORS.lightWhite}
              text={'Sign Up'}
              marginLeft={-30}
              handlePress={handleSignUp}
              disabled={!email || !agree}
              bgcolor={COLORS.defaultbtn}>
              <Button title="Sign Up" onPress={handleSignUp} disabled={!email || !agree} />
            </ScreenBtn>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginBottom: -6 }}>
          <Image source={images.homebar} />
        </View>
      </View>
  );
};

export default Step1;
