import { View, Text, Image } from "react-native";

import styles from "./dashboard.style";
import { images } from "../../constants";
import { ScrollView } from "react-native-web";

const Count = ({ number, title, color }) => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text style={{ fontSize: 56, fontWeight: 'bold' }}>{number}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'normal', color: color }}>{title}</Text>
    </View>
  );
};

const Dashboard = () => {

  return (
    <ScrollView>
    <View style={{ flexDirection: "row", gap: 20 }}>
      <View style={styles.sidebar}>

        <View style={styles.box}>
          <Image source={images.home} style={{ margin: 9 }} ></Image>
        </View>
        <Image source={images.laptop} style={{ marginTop: 135 }}></Image>
        <Image source={images.contact} ></Image>
        <Image source={images.upload} ></Image>
        <Image source={images.calendar} ></Image>
        <Image source={images.setting} ></Image>

      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Flex N Gate QA Analytics</Text>
            <Text style={styles.headerDes}>Get real time insights on the issues and resolution</Text>
          </View>

          <View style={styles.headerimage}>
            <Image source={images.illustration}></Image>
          </View>
        </View>

        <View>
          <Image source={images.admin_chart}></Image>
          <View style={styles.count}>
            <Count number={10} title={"Open"} color="red" />
            <Count number={20} title={"Contained"} color="orange" />
            <Count number={90} title={"Closed"} color="green" />
          </View>
        </View>

      </View>
    </View>
    </ScrollView>
  );
};

export default Dashboard;