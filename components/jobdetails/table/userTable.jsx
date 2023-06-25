import React from "react";
import { View, Text, Image, TouchableOpacity,} from "react-native";
import styles from "../table/userTable.styles"

const Table = ({ data }) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        {data.headers.map((header, index) => (
          <Text key={index} style={styles.headerCell}>
            {header}
          </Text>
        ))}
      </View>
      {data.rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <TableCell key={cellIndex} cellData={cell} />
          ))}
        </View>
      ))}
    </View>
  );
};

const TableCell = ({ cellData }) => {
  const { type, value } = cellData;

  // Render cell based on the type of data
  switch (type) {
    case "text":
      return <Text style={styles.cell}>{value}</Text>;
    case "image":
      return <Image source={value} style={styles.imageCell} />;
    case "tag":
      return <Text style={styles.tagCell}>{value}</Text>;
    case "button":
      return (
        <TouchableOpacity style={styles.buttonCell}>
          <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
      );
    case "form":
      return <View style={styles.formCell}>{value}</View>;
    default:
      return null;
  }
};

export default Table;