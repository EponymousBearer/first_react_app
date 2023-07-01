import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Home from "./home";

// Pages
import {
  Admin_company_info,
  Admin_report,
  Admin_user,
  Dashboard,
  Step1,
  Step2,
  Step3,
  Step5,
  Step6,
  Step7,
  Step8,
} from "../components";

const Stack = createStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

const StepsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Step1">
      <Stack.Screen
        name="Step1"
        component={Step1}
        options={{ title: "Step 1", headerShown: false }}
      />
      <Stack.Screen
        name="Step2"
        component={Step2}
        options={{ title: "Step 2" }}
      />
      <Stack.Screen
        name="Step3"
        component={Step3}
        options={{ title: "Step 3" }}
      />
      <Stack.Screen
        name="Step5"
        component={Step5}
        options={{ title: "Step 5" }}
      />
      <Stack.Screen
        name="Step6"
        component={Step6}
        options={{ title: "Step 6" }}
      />
      <Stack.Screen
        name="Step7"
        component={Step7}
        options={{ title: "Step 7" }}
      />
      <Stack.Screen
        name="Step8"
        component={Step8}
        options={{ title: "Step 8" }}
      />
    </Stack.Navigator>
  );
};

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Admin"
            component={AdminStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Steps"
            component={StepsStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Layout;
