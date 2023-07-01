import React from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants";
import Layout from "./_layout";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Layout"
          component={Layout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Home;
