import React, { Component } from "react";
// import "./email.css";
class Email extends Component {
  render() {
    return (
      <div className="w-full h-screen  ">
        <div className="bg-backgroundcolor  w-[100%] h-[100%]">
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-center ">
            <div className="w-[50%] h-[60%] midmobile:bg-transparent tab:bg-backgroundform  rounded-[5em]">
              <div className="w-full h-[100%]  flex flex-col items-center justify-evenly">
                <div className="flex  justify-center  flex-wrap gap-3 ">
                  <label htmlFor="" className="text-white text-[2em] ">
                    Email-Add
                  </label>
                  <input className="lg:pr-40" type="text" />
                </div>

                <div className="flex  justify-center flex-wrap  gap-3">
                  <label htmlFor="" className="text-white text-[2em] ">
                    Password
                  </label>
                  <input className="lg:pr-40" type="password" />
                </div>
                <button class="btn btn-error text-white lg:text-2xl hover:bg-white hover:text-black ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Email;
