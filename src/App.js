import React from "react";
import Info from "./pages/Info";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import SelectPlan from "./component/SelectPlan";
import PersonalInfo from "./component/PersonalInfo";
import AddOns from "./component/AddOns";
import Finishing from "./component/Finishing";
import Thanks from "./pages/Thanks";

const App = () => {
  return (
    <> 
      <Router>
      <div className="containers">

        <Sidebar />
     
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/selectPlan" element={<SelectPlan /> } />
          <Route path="/add" element={<AddOns />} />
          <Route path="/finishing" element={<Finishing />} />
          <Route path="/thanks" element={<Thanks />}/>
         </Routes>
      </div>
      </Router>

      {/* <Info /> */}
    </>
  );
};

export default App;
