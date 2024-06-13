import React, { Component } from "react";
import "./index.css";

class Secondpag extends Component {
  render() {
    return (
      <div className="bg-gradient-to-b from-myred to-black">
        <div className="  flex flex-col gap-[4em]">
          <h1 className="text-4xl text-center font-extrabold  text-white mt-16 ">
            Up Coming Movies
          </h1>
          <div class="carousel carousel-center w-full p-4 space-x-4  rounded-box mb-[12em]">
            <div class="carousel-item  tab:h-[25em] mobile:h-[20em] midmobile:h-[15em]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_w1_cPLmD1v4MH5LdliQjGhhZtHyEmftj1w&usqp=CAU"
                class="rounded-box"
              />
            </div>
            <div class="carousel-item  tab:h-[25em] mobile:h-[20em] midmobile:h-[15em] ">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1700270983"
                class="rounded-box"
              />
            </div>
            <div class="carousel-item  tab:h-[25em] mobile:h-[20em] midmobile:h-[15em]  ">
              <img
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti4TPuGwzAPbQrEaCGXEI-tTP0x8kkAcD7A&usqp=CAU"
                class="rounded-box"
              />
            </div>
            <div class="carousel-item tab:h-[25em] mobile:h-[20em] midmobile:h-[15em] ">
              <img
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-lJdn8ZeNrLASnzas90rz1mdcdN21DJh3A&usqp=CAU"
                class="rounded-box"
              />
            </div>
            <div class="carousel-item  tab:h-[25em] mobile:h-[20em] midmobile:h-[15em] ">
              <img
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwxqSQej7yyB7yDkvMfusH280mtfRLo4FGQ&usqp=CAU"
                class="rounded-box"
              />
            </div>
            <div class="carousel-item tab:h-[25em] mobile:h-[20em]   midmobile:h-[15em]  ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_Fuq32RNFNVkvyjWUIcJmaWeWnU-3ALkxQ&usqp=CAU"
                class="rounded-box"
              />
            </div>
            <div class="carousel-item  tab:h-[25em] mobile:h-[20em] midmobile:h-[15em] ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS3Rbwfe3_bMSYdupV9gA8iCzBuOuNA3OCw&usqp=CAU"
                class="rounded-box"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Secondpag;
