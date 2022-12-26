import React from "react";
import info from "../style/Info.css";
import mysvg from "../images/bg-sidebar-desktop.svg";

import Sidebar from "../component/Sidebar";
import SelectPlan from "../component/SelectPlan";
import PersonalInfo from "../component/PersonalInfo";
import AddOns from "../component/AddOns";
import Finishing from "../component/Finishing";

const Info = () => {
  return (
    <>
      <div className="containers">
        <Sidebar />
        {/* <SelectPlan /> */}
        {/* <PersonalInfo /> */}
        {/* <AddOns /> */}
        <Finishing />
      </div>
    </>
  );
};

export default Info;
