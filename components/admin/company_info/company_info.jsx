import {
  View,
  Text,
  Image,
} from "react-native";
import CompanyTable from "../../sub_components/companytable/companyTable";
import styles from "./company_info.styles";
import { COLORS, SIZES, images } from "../../../constants";
import ScreenBtn from "../../sub_components/header/ScreenHeaderBtn";

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

const Count = ({ number, title }) => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text style={{ fontSize: 56, fontWeight: 'bold' }}>{number}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'normal', color: 'yellow' }}>{title}</Text>
    </View>
  );
};

const Admin_company_info = () => {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.imageContainer}>
            <Image source={images.profile_pic} style={styles.profileImage} />
            <Image source={images.drive} style={styles.driveImage} />
          </View>
          <Text style={styles.headerTitle}>Qualitygram</Text>
          {/* <TouchableOpacity>
            <Text style={styles.headerBtn}>Admin</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{ alignItems: "flex-start" }}>

          <TitleWithImage title="Company Information" tag="company photo, name and detail" imageSource={images.doc} />
          <TitleWithImage title="Teams and Users" tag="add new users and create teams" imageSource={images.team} />
          <TitleWithImage title="Reports" tag="usage and actions report" imageSource={images.report} />

        </View>

      </View>

      <View>

        <View style={styles.rightContainer}>
          <Text style={styles.heading}>Company Information</Text>

          <View style={styles.box}>
            <View style={{ flex: 1 }}>
              <CompanyTable />
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <ScreenBtn text={"Update Setting"} bgcolor={COLORS.defaultbtn} textcolor={COLORS.white}></ScreenBtn>
            <ScreenBtn text={"Cancel"} bgcolor={COLORS.white} textcolor={COLORS.cancel}></ScreenBtn>
          </View>
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

export default Admin_company_info;
