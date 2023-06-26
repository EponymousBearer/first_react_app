import { TextInput } from "react-native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./user.styles";
import { COLORS, SIZES, images } from "../../../constants";
import ScreenBtn from "../../sub_components/header/ScreenHeaderBtn";
import Table from "../../sub_components/table/userTable";

const TitleWithImage = ({ title, tag, imageSource }) => {
  return (
    <View style={{ flexDirection: "row-reverse" }}>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 50 }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'normal' }}>{tag}</Text>
      </View>

      <Image source={imageSource} style={{ margin: 10, marginRight: 20, marginTop: 60 }} />
      <View style={styles.line}></View>
    </View>
  );
};

const Count = ({ number, title }) => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text style={{ fontSize: 56, fontWeight: 'bold' }}>{number}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'normal', color: 'blue' }}>{title}</Text>
    </View>
  );
};

const data = {
  headers: [],
  rows: [
    [
      { type: "image", value: images.nicholas },
      { type: "text", value: "Nicholas Gordon" },
      { type: "form", value: <TextInput placeholder="Group Name" style={{fontWeight:600}}/> },
      { type: "tag", value: "Business" },
      { type: "button", value: "..." },

    ],[
      { type: "image", value: images.bradley },
      { type: "text", value: "Bradley Malone" },
      { type: "form", value: <TextInput placeholder="Group Name" style={{fontWeight:600}}/> },
      { type: "tag", value: "Business" },
      { type: "button", value: "..." },

    ],[
      { type: "image", value: images.ernest },
      { type: "text", value: "Ernest Masone" },
      { type: "form", value: <TextInput placeholder="Group Name" style={{fontWeight:600}}/> },
      { type: "tag", value: "Business" },
      { type: "button", value: "..." },

    ],[
      { type: "image", value: images.marvin },
      { type: "text", value: "Marvin Lambert" },
      { type: "form", value: <TextInput placeholder="Group Name" style={{fontWeight:600}}/> },
      { type: "tag", value: "Business" },
      { type: "button", value: "..." },

    ],[
      { type: "image", value: images.teresa },
      { type: "text", value: "Teresa Lloyd" },
      { type: "form", value: <TextInput placeholder="Group Name" style={{fontWeight:600}}/> },
      { type: "tag", value: "Business" },
      { type: "button", value: "..." },

    ],[
      { type: "image", value: images.fred },
      { type: "text", value: "Fred Haynes" },
      { type: "form", value: <TextInput placeholder="Group Name" style={{fontWeight:600}}/> },
      { type: "tag", value: "Private" },
      { type: "button", value: "..." },

    ],
  ],
};

const Admin_user = () => {
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

      <View style={styles.rightContainer}>
        <Text style={styles.heading}>Users And Group</Text>

        <View style={styles.box}><Table data={data}></Table></View>

        <View style={{flexDirection:"row", gap:10}}>
          <ScreenBtn text={"Update Setting"} bgcolor={COLORS.defaultbtn} textcolor={COLORS.white}></ScreenBtn>
          <ScreenBtn text={"Cancel"} bgcolor={COLORS.white} textcolor={COLORS.cancel}></ScreenBtn>
        </View>
      </View>

      <View style={{ marginLeft: 200 }}>
        <View style={styles.addButton}>
          <Image source={images.plus} style={{ margin: 12 }}></Image>
        </View>
      </View>
      {/* 
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          /> 
        )}
      </View>*/}
    </View>
  );
};

export default Admin_user;
