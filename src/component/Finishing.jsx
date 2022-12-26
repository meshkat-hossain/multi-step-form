import React from "react";

const Finishing = () => {
  return (
    <>
      <div className="infoSide">
        <div className="section1 ">
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="section2 finishingPlan">
            <div className="line1">

          <div className="plan">
            <p>Arcade (Monthly)</p>
            <span>Change</span>
          </div>

          <div className="prices">
            <p>$9/mo</p>
          </div>
            </div>
          <div className="onlineService">
            <p>Online service</p>
            <span>+$1/mo</span>
          </div>
          <div className="onlineService">
            <p>Larger Storage</p>
            <span>+$2/mo</span>
          </div>
          
        </div>
        <div className="total">
            <p>Total (Per Month)</p>
            <span>+$12/mo</span>
          </div>

          <div className="section4 finishingbtn">
          <div className="btn1">
            <button>Go Back</button>
          </div>
          <div className="btn2 confirmbtn">
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finishing;
