import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Button } from 'react-native';
import { ScrollView } from 'react-native';
import styles from "./step7.styles";
import { COLORS, SIZES, images } from "../../../constants";
import MobileBtn from '../../sub_components/buttons/Mobilebtn/MobileBtn';
import ScreenBtn from '../../sub_components/buttons/ScreenBtn/ScreenBtn';
import { useSafeArea } from 'react-native-safe-area-context';
import OpenBtn from '../../sub_components/buttons/OpenBtn/OpenBtn';
import { Link } from 'expo-router';

const Step7 = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleSendMessage = () => {
        if (currentMessage) {
            const currentTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

            const newMessage = {
                user: 'Gary Chen', // Replace with the current user's name
                message: currentMessage,
                timestamp: currentTime,
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setCurrentMessage('');
        }
    }

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (button) => {
        setSelectedButton(button);
    };

    const gotonavigation = () => {
        navigation.navigate('Step8');
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
                    <Text style={{ color: "red" }}>Attention- Please add containment action</Text>
                </View>

                <View style={styles.container3}>
                    <Text style={styles.headerTitle}>Part No - 94P293-10393</Text>
                    <ScreenBtn bgcolor={"#0D1A40"} text={"Side Wrinkles"} textcolor={"#D8D8FF"} fontWeight={400}></ScreenBtn>
                </View>

                <View style={styles.subcontainer}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginVertical: 7 }}>Status</Text>
                    <View style={styles.openbutton}>
                        <OpenBtn
                            text="Open"
                            bgcolor="#E8B4B4"
                            onPress={() => handleButtonPress('Open')}
                            isSelected={selectedButton === 'Open'}
                        />
                        <OpenBtn
                            text="Contained"
                            bgcolor="#FFDA55"
                            onPress={() => handleButtonPress('Contained')}
                            isSelected={selectedButton === 'Contained'}
                        />
                        <OpenBtn
                            text="Closed"
                            bgcolor="#32D59A"
                            onPress={() => handleButtonPress('Closed')}
                            isSelected={selectedButton === 'Closed'}
                        />
                    </View>
                </View>

                <View style={styles.container4}>

                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={messages.slice(-3)} // Display only the last 3 messages
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={{ padding: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'baseline', marginBottom: 5 }}>
                                        <Text style={{ fontWeight: '500' }}>{item.user}</Text>
                                        <Text style={{ fontSize: 12, color: 'gray', marginLeft: 10 }}>{item.timestamp}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'baseline', marginBottom: 5 }}>
                                        <Image source={images.status}></Image>
                                        <Text style={{ backgroundColor: COLORS.lightWhite, alignSelf: 'flex-start', marginLeft: 6, paddingVertical: 7, paddingHorizontal: 10, borderTopRightRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>{item.message}</Text>
                                    </View>
                                </View>
                            )}
                        />

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: COLORS.lightWhite, justifyContent: 'space-around', alignItems: 'center', width: 335 }}>
                                <Image source={images.camera}></Image>
                                <Image source={images.rec}></Image>
                                <TextInput
                                    style={{ textAlign: 'center', color: "#8083A3" }}
                                    placeholder="Type your message"
                                    value={currentMessage}
                                    onChangeText={setCurrentMessage}
                                />
                                <Image source={images.voice}></Image>
                                <TouchableOpacity onPress={handleSendMessage} style={{ padding: 10, backgroundColor: '#6B59CC', borderRadius: 10 }}>
                                    <Image source={images.icon}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View><ScreenBtn handlePress={gotonavigation} text={"Step 8"}></ScreenBtn></View>
                <View style={styles.homebar}><Image source={images.homebar}></Image></View>

            </View>
    );
}

export default Step7;