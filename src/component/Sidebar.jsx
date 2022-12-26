import React from 'react'
import sidebar from '../style/Sidebar.css'

const Sidebar = () => {
  return (
    <>

<div className="leftSideBar ">
          <div className="left">
            <div className="label">
              <div className="checkbox">
                <button>1</button>
              </div>
              <div className="text-label">
                <label>STEP 1</label>
                <p>YOUR INFO</p>
              </div>
            </div>

            <div className="label">
              <div className="checkbox">
                <button>2</button>
              </div>
              <div className="text-label">
                <label>STEP 2</label>
                <p>SELECT PLAN</p>
              </div>
            </div>

            <div className="label">
              <div className="checkbox">
                <button>3</button>
              </div>
              <div className="text-label">
                <label>STEP 3</label>
                <p>ADD-ONS</p>
              </div>
            </div>

            <div className="label">
              <div className="checkbox">
                <button>4</button>
              </div>
              <div className="text-label">
                <label>STEP 4</label>
                <p>SUMMARY</p>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default Sidebar