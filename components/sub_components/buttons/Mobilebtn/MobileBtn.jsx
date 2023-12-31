import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./MobileBtn.style";

const MobileBtn = ({ handlePress , text, bgcolor, textcolor, paddingHorizontal, marginLeft}) => {
  const btnStyles = [styles.btnContainer, { backgroundColor: bgcolor, paddingHorizontal: paddingHorizontal, marginLeft: marginLeft}];
  const btnTextStyles = [styles.btnText, { color: textcolor}];
  return (
    <TouchableOpacity style={btnStyles} onPress={handlePress}>
      <Text style={btnTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MobileBtn;
