import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./ScreenBtn.style";

const ScreenBtn = ({ handlePress , text, bgcolor, textcolor, paddingHorizontal, marginLeft, fontWeight,width,height}) => {
  const btnStyles = [styles.btnContainer, { backgroundColor: bgcolor, paddingHorizontal: paddingHorizontal, width:width ,height:height}];
  const btnTextStyles = [styles.btnText, { color: textcolor, marginLeft:marginLeft, fontWeight: fontWeight}];
  return (
    <TouchableOpacity style={btnStyles} onPress={handlePress}>
      <Text style={btnTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ScreenBtn;
