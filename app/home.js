import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Admin,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import Admin_report from "../components/admin/report/report";
import Admin_user from "../components/admin/user/user";
import Admin_company_info from "../components/admin/company_info/company_info";
import Dashboard from "../components/dashboard/dashboard";

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite,}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='100%' />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <ScreenHeaderBtn iconUrl={images.search} dimension='100%' />
              <ScreenHeaderBtn iconUrl={images.profile} dimension='95%' />
            </View>
          ),
          headerTitle: "Settings",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          {/* <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
           */}
          <Dashboard />
          <Admin_report />
          <Admin_user />
          <Admin_company_info />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;