import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./ScreenBtn.style";

const ScreenBtn = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Text style={styles.btnText}>EXPORT</Text>
    </TouchableOpacity>
  );
};

export default ScreenBtn;
