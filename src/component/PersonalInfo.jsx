import React from "react";


const PersonalInfo = () => {
  return (
    <>
      <div className="infoSide ">
        <div className="section1 personalInfosection">
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number .</p>
        </div>
        <div className="formList">
          <form>
            <div className="form-group mb-4 mt-5">
              <label for="formGroupExampleInput">Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="formGroupExampleInput"
                placeholder="Meshkat Hossain Himu"
              />
            </div>
            <div className="form-group mb-4">
              <label  for="formGroupExampleInput2 ">Email address</label>
              <input
                type="text"
                className="form-control mt-2"
                id="formGroupExampleInput2"
                placeholder="meshkat.hossain.himu@gmail.com"
              />
            </div>
            <div className="form-group mb-4">
              <label for="formGroupExampleInput2">Phone Number</label>
              <input
                type="text"
                className="form-control mt-2"
                id="formGroupExampleInput2"
                placeholder="01572331372"
              />
            </div>
          </form>
        </div>
         <div className="btn2 personalInfoBtn2">
            <button>Next Step</button>
          </div>
      </div>
    </>
  );
};

export default PersonalInfo;
