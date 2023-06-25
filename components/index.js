import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./admin/welcome/Welcome";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";
import Admin_company_info from "./admin/company_info/company_info"
import Admin_report from "../components/admin/report/report";
import Admin_user from "../components/admin/user/user";
import Dashboard from "./dashboard/dashboard";
// common

export {
  ScreenHeaderBtn,
  Welcome,
  Admin_company_info,
  Admin_user,
  Admin_report,
  Dashboard,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
};
