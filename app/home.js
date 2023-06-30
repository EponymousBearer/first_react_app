import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Admin,
  ScreenHeaderBtn,
  Admin_report,
  Admin_user,
  Admin_company_info,
  Dashboard,
} from "../components";
import Step1 from "../components/signup/step1/step1";
import Step2 from "../components/signup/step2/step2";
import Step3 from "../components/signup/step3/step3";
import Step5 from "../components/signup/step5/step5";
import Step6 from "../components/signup/step6/step6";
import Step7 from "../components/signup/step7/step7";
import Step8 from "../components/signup/step8/step8";

const Stack = createStackNavigator();

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 10 }}>
                <ScreenHeaderBtn iconUrl={images.search} dimension="100%" />
                <ScreenHeaderBtn iconUrl={images.profile} dimension="95%" />
              </View>
            ),
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Admin_report"
          component={Admin_report}
          options={{ title: "Admin Report" }}
        />
        <Stack.Screen
          name="Admin_user"
          component={Admin_user}
          options={{ title: "Admin User" }}
        />
        <Stack.Screen
          name="Admin_company_info"
          component={Admin_company_info}
          options={{ title: "Admin Company Info" }}
        />
        <Stack.Screen
          name="Step 1"
          component={Step1}
          options={{ title: "Step 1" }}
        />
        <Stack.Screen
          name="Step 2"
          component={Step2}
          options={{ title: "Step 2" }}
        />
        <Stack.Screen
          name="Step 3"
          component={Step3}
          options={{ title: "Step 3" }}
        />
        <Stack.Screen
          name="Step 5"
          component={Step5}
          options={{ title: "Step 5" }}
        />
        <Stack.Screen
          name="Step 6"
          component={Step6}
          options={{ title: "Step 6" }}
        />
        <Stack.Screen
          name="Step 7"
          component={Step7}
          options={{ title: "Step 7" }}
        />
        <Stack.Screen
          name="Step 8"
          component={Step8}
          options={{ title: "Step 8" }}
        />
      </Stack.Navigator>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <DashboardButton screenName="Dashboard" />
          <DashboardButton screenName="Admin_report" />
          <DashboardButton screenName="Admin_user" />
          <DashboardButton screenName="Admin_company_info" />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const SettingsScreen = () => {
  const navigation = useNavigation();

  const goToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, }}>
      <TouchableOpacity onPress={() => goToScreen("Dashboard")}>
        <Text>Go to Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Admin_report")}>
        <Text>Go to Admin Report</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Admin_user")}>
        <Text>Go to Admin User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Admin_company_info")}>
        <Text>Go to Admin Company Info</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Step 1")}>
        <Text>Step 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Step 2")}>
        <Text>Step 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Step 3")}>
        <Text>Step 3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Step 5")}>
        <Text>Step 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Step 6")}>
        <Text>Step 6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Step 7")}>
        <Text>Step 7</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen("Step 8")}>
        <Text>Step 8</Text>
      </TouchableOpacity>
    </View>
  );
};

const DashboardButton = ({ screenName }) => {
  const navigation = useNavigation();

  const goToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={() => goToScreen(screenName)}>
      <Text>{screenName}</Text>
    </TouchableOpacity>
  );
};

export default Home;
