import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native';
import styles from "./step5.styles";
import { COLORS, SIZES, images } from "../../../constants";
import MobileBtn from '../../sub_components/buttons/Mobilebtn/MobileBtn';
import { useNavigation } from '@react-navigation/native';

const step5 = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const newdefect = 'New Defect';
    const options = ['Side Wrinkles', 'Splits', 'Imprints', newdefect];
    const navigation = useNavigation();

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const navigation2 = () => {
        navigation.navigate('Step6');
    }

    return (

            <View style={styles.mainContainer}>

                <View>
                    <Image source={images.mobilebar}></Image>
                </View>

                <View style={styles.container1}>
                    <View style={styles.heading}>
                        <Text style={styles.header}>Flex N Gate</Text>
                        <Image style={{ marginLeft: 70 }} source={images.search}></Image>
                    </View>
                </View>

                <View style={styles.container2}>
                    <Image source={images.stamping}></Image>
                </View>

                <View style={styles.container3}>
                    <Text style={styles.headerTitle}>Part No - 94P293-10393</Text>
                    <Image source={images.people}></Image>
                </View>

                <View style={styles.container4}>
                    <View style={styles.subcontainer}>
                        <Text style={{ fontSize: 15, marginVertical: 5 }}>Defect</Text>
                        <TouchableOpacity style={styles.dropdownButton} onPress={handleToggleDropdown}>
                            <Text style={styles.dropdownButtonText}>{selectedOption || 'Select Defect Type ^'}</Text>
                        </TouchableOpacity>

                        {isOpen && (
                            <View style={styles.optionsContainer}>
                                {options.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.optionButton, option === 'New Defect' && styles.newDefectOption]}
                                        onPress={() => handleSelectOption(option)}
                                    >
                                        <Text style={[styles.optionText, option === 'New Defect' && styles.newDefectOption]}>{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                    <View style={styles.confirmBtn}>
                        <MobileBtn handlePress={navigation2} textcolor={COLORS.black} text={"Confirm"} bgcolor={'#2FD0A0'}></MobileBtn>
                    </View>

                </View>

                <View style={styles.container5}>
                    <View style={styles.lastContainer}>
                        <Image source={images.qrcode}></Image>
                        <View></View>
                        <View></View>
                        <Image source={images.camera}></Image>
                    </View>
                </View>

                <View style={styles.homebar}><Image source={images.homebar}></Image></View>

            </View>

    );
}

export default step5;