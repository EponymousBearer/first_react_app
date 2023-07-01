import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants';
import styles from './OpenBtn.styles';

const OpenBtn = ({ text, bgcolor, onPress, isSelected }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: isSelected ? bgcolor : COLORS.lightWhite }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: isSelected ? COLORS.black : "#8083A3" }]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default OpenBtn