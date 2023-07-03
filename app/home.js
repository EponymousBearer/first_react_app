import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
    Step1,
    Step2,
    Dashboard,
    Step3,
    Step5,
    Step6,
    Step7,
    Step8,
    Admin_company_info,
    Admin_report,
    Admin_user
} from "../components";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView>
                <Step1></Step1>
                <Step2></Step2>
                <Step3></Step3>
                <Step5></Step5>
                <Step6></Step6>
                <Step7></Step7>
                <Step8></Step8>
                <Dashboard></Dashboard>
                <Admin_company_info></Admin_company_info>
                <Admin_report></Admin_report>
                <Admin_user></Admin_user>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;