import React from "react";
import Form from "react-bootstrap/Form";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

const InfoSide = () => {
  return (
    <>
      <div className="infoSide ">
        <div className="section1">
          <h2>Select your plan</h2>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="section2">
          <div className="card1">
            <div className="logo">
              <img src={arcade} />
            </div>
            <h5>Arcade</h5>
            <p>$9/mo</p>
          </div>
          <div className="card2">
            <div className="logo">
              <img src={advanced} />
            </div>
            <h5>Advanced</h5>
            <p>$9/mo</p>
          </div>
          <div className="card3">
            <div className="logo">
              <img src={pro} />
            </div>
            <h5>Pro</h5>
            <p>$9/mo</p>
          </div>
        </div>
        <div className="section3">
          <p>Monthly</p>
          <Form>
            <Form.Check type="switch" id="custom-switch" label="" />
          </Form>
          <p>Yearly</p>
        </div>
        <div className="section4">
          <div className="btn1">
            <button>Go Back</button>
          </div>
          <div className="btn2 ">
            <button>Next Step</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSide;
