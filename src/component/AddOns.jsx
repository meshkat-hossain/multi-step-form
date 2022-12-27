import React from "react";
import { NavLink } from "react-router-dom";
const AddOns = () => {
  return (
    <>
      <div className="infoSide">
        <div className="section1 personalInfosection">
          <h2>Pick Add-ons</h2>
          <p>Add ons help enhanch your gamming exprience</p>
        </div>
        <div className="section2 adds">
          <div className="checkbox">
            <div className="form-check check">
              <input
                className="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label="..."
              />
              <p>Online Service</p>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <div className="rate">
            <p>+$1/mo</p>
          </div>
        </div>

        <div className="section2 adds">
          <div className="checkbox">
            <div className="form-check check">
              <input
                className="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label="..."
              />
              <p>Larger Storege</p>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <div className="rate">
            <p>+$2/mo</p>
          </div>
        </div>
        <div className="section2 adds">
          <div className="checkbox">
            <div className="form-check check">
              <input
                className="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label="..."
              />
              <p>Customizable profile</p>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <div className="rate">
            <p>+$2/mo</p>
          </div>
        </div>
        <div className="section4 pickaddbtn">
          <div className="btn1">
            <NavLink to="/selectPlan">
              <button>Go Back</button>
            </NavLink>
          </div>
          <div className="btn2">
            <NavLink to="/finishing">

            <button>Next Step</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOns;
