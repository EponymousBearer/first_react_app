import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native';
import styles from "./step8.styles";
import { COLORS, SIZES, images } from "../../../constants";
import MobileBtn from '../../sub_components/buttons/Mobilebtn/MobileBtn';
import ScreenBtn from '../../sub_components/buttons/ScreenBtn/ScreenBtn';
import { useSafeArea } from 'react-native-safe-area-context';
import OpenBtn from '../../sub_components/buttons/OpenBtn/OpenBtn';

const Step8 = () => {
    const data = [
        {
            id: 1,
            color: 'orange',
            image: require('../../../assets/images/stampingwrinkles1.png'),
            date: 'May-11-2023',
            tag: 'Side Wrinkles',
        },
        {
            id: 2,
            color: 'red',
            image: require('../../../assets/images/stampingwrinkles2.png'),
            date: 'May-10-2023',
            tag: 'Split Metal',
        },
        {
            id: 3,
            color: 'green',
            image: require('../../../assets/images/stampingwrinkles3.png'),
            date: 'May-09-2023',
            tag: 'Imprints',
        },
        // Add more items as needed
    ];


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
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginVertical: 15 }}>
                            <View style={{ flexDirection: 'row', marginTop: 2 }}>
                                <View style={{ zIndex: 1, backgroundColor: item.color, width: 30, height: 30, borderRadius: 20, marginRight: -10, marginTop: -17 }} />
                                <Image source={item.image} style={{}} />
                            </View>
                            <View style={{ flexDirection: 'row', width: 280, marginLeft: 15 }}>
                                <Text style={{}}>{item.date}</Text>
                                <View style={{ marginLeft: 45 }}>
                                    <ScreenBtn height={25} width={150} bgcolor={"#0D1A40"} text={item.tag} textcolor={"#D8D8FF"} fontWeight={400}></ScreenBtn>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>


            <View style={styles.container3}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-around', alignItems: 'center', width: 325 }}>
                        <TouchableOpacity style={{ borderRadius: 10 }}>
                            <ScreenBtn text={"Add New Issue"} bgcolor={'lightblue'} paddingHorizontal={10} width={130} textcolor={COLORS.black}></ScreenBtn>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ScreenBtn text={"Report"} bgcolor={'grey'} textcolor={COLORS.black} width={100} ></ScreenBtn>
                        </TouchableOpacity>
                        <View><Image source={images.calendar2}></Image></View>
                    </View>
                </View>

            </View>

            <View style={styles.homebar}><Image source={images.homebar}></Image></View>

        </View>
    );
}

export default Step8;