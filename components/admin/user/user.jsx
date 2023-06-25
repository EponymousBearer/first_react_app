import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./user.styles";
import { COLORS, SIZES, images } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import { color } from "react-native-reanimated";

const TitleWithImage = ({ title, tag, imageSource }) => {
  return (
    <View style={{ flexDirection: "row-reverse" }}>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'normal' }}>{tag}</Text>
      </View>
      <Image source={imageSource} style={{ margin: 10, marginRight:20 }} />
    </View>
  );
};

const Count = ({ number, title}) => {
  return (
    <View style={{ flexDirection: "column", alignItems:"center" }}>
        <Text style={{ fontSize: 56, fontWeight: 'bold'}}>{number}</Text>
        <Text style={{ fontSize: 32, fontWeight: 'normal', color: 'blue' }}>{title}</Text>
    </View>
  );
};

const Admin_user = () => {
  // const router = useRouter();
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: "1",
  // });

  // const [selectedJob, setSelectedJob] = useState();

  // const handleCardPress = (item) => {
  //   router.push(`/job-details/${item.job_id}`);
  //   setSelectedJob(item.job_id);
  // };


  return (
    <View style={styles.container}>

      <View style={styles.header}>
     
        <Text style={styles.headerTitle}>Qualitygram</Text>
     
        <TouchableOpacity>
     
          <Text style={styles.headerBtn}>Admin</Text>
     
        </TouchableOpacity>
     
        <View style={{alignItems:"flex-start"}}>
     
          {/* Call the TitleWithImage component multiple times */}
          <TitleWithImage title="Company Information" tag="company photo, name and detail" imageSource={images.doc} />
          <TitleWithImage title="Teams and Users" tag="add new users and create teams" imageSource={images.team} />
          <TitleWithImage title="Reports" tag="usage and actions report" imageSource={images.report} />
     
        </View>
     
      </View>
     
      <View>
     
        <Image source={images.admin_chart}></Image>
        <View style={styles.count}>
        <Count number={10} title={"Open"} />
        <Count number={20} title={"Contained"} />
        <Count number={90} title={"Closed"} />
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
