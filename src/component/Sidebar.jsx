import React from "react";
import sidebar from "../style/Sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="leftSideBar ">
        <div className="left">
          <div className="label">
            <div className="checkbox">
              <NavLink  to="/">
                <button>1</button>
              </NavLink>
            </div>
            <div className="text-label">
              <label>STEP 1</label>
              <p>YOUR INFO</p>
            </div>
          </div>

          <div className="label">
            <div className="checkbox">
              <NavLink  to="/selectPlan">
                <button>2</button>
              </NavLink>
            </div>
            <div className="text-label">
              <label>STEP 2</label>
              <p>SELECT PLAN</p>
            </div>
          </div>

          <div className="label">
            <div className="checkbox">
              <NavLink  to="/add">
                <button>3</button>
              </NavLink>
            </div>
            <div className="text-label">
              <label>STEP 3</label>
              <p>ADD-ONS</p>
            </div>
          </div>

          <div className="label">
            <div className="checkbox">
              <NavLink  to="/finishing">
                <button>4</button>
              </NavLink>
            </div>
            <div className="text-label">
              <label>STEP 4</label>
              <p>SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
