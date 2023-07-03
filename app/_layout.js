import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "home",
};

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack initialRouteName="Step1">
            <Stack.Screen name="Step1" />
            <Stack.Screen name="Step2" />
            <Stack.Screen name="Step3" />
            <Stack.Screen name="Step5" />
            <Stack.Screen name="Step6" />
            <Stack.Screen name="Step7" />
            <Stack.Screen name="Step8" />
        </Stack>
    )
};

export default Layout;