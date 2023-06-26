import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import ScreenBtn from "../../sub_components/header/ScreenHeaderBtn";
import styles from "./report.style";
import { COLORS, SIZES, images } from "../../../constants";

const TitleWithImage = ({ title, tag, imageSource }) => {
  return (
    <View style={{ flexDirection: "row-reverse" }}>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 50 }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'normal' }}>{tag}</Text>
      </View>
      
      <Image source={imageSource} style={{ margin: 10, marginRight: 20, marginTop: 60 }} />
    </View>
  );
};

const Count = ({ number, title, color }) => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text style={{ fontSize: 54, fontWeight: 'bold', marginTop: 20 }}>{number}</Text>
      <Text style={{ fontSize: 30, fontWeight: 'normal', color: color }}>{title}</Text>
    </View>
  );
};

const Admin_report = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.imageContainer}>
            <Image source={images.profile_pic} style={styles.profileImage} />
            <Image source={images.drive} style={styles.driveImage} />
          </View>
          <Text style={styles.headerTitle}>Qualitygram</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Admin</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "flex-start" }}>

          <TitleWithImage title="Company Information" tag="company photo, name and detail" imageSource={images.doc} />
          <TitleWithImage title="Teams and Users" tag="add new users and create teams" imageSource={images.team} />
          <TitleWithImage title="Reports" tag="usage and actions report" imageSource={images.report} />

        </View>

      </View>

      <View style={{ flexDirection: "column" }}>

        <View>
          <Image source={images.admin_chart}></Image>
        </View>
        <View style={styles.count}>
          <Count number={10} title={"Open"} color="red" />
          <Count number={20} title={"Contained"} color="orange" />
          <Count number={90} title={"Closed"} color="green" />
        </View>
        <View style={styles.buttonContainer}>
          <ScreenBtn text={"Export"} bgcolor={COLORS.defaultbtn} textcolor={COLORS.white}/>
        </View>

      </View>

    </View>
  );
};

export default Admin_report;
