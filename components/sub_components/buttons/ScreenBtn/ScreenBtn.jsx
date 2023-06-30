import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./ScreenBtn.style";

const ScreenBtn = ({ handlePress , text, bgcolor, textcolor, paddingHorizontal, marginLeft, fontWeight}) => {
  const btnStyles = [styles.btnContainer, { backgroundColor: bgcolor, paddingHorizontal: paddingHorizontal }];
  const btnTextStyles = [styles.btnText, { color: textcolor, marginLeft:marginLeft, fontWeight: fontWeight}];
  return (
    <TouchableOpacity style={btnStyles} onPress={handlePress}>
      <Text style={btnTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ScreenBtn;
