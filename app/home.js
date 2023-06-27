import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Admin,
  ScreenHeaderBtn,
  Welcome,
  Admin_report,
  Admin_user,
  Admin_company_info,
  Dashboard,
} from "../components";
import step1 from "../components/signup/step1";

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
          component={step1}
          options={{ title: "Step 1" }}
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
