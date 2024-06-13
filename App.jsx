import React, { Component } from "react";
import "./index.css";
import Navbar from "./navbar";
import Email from "./email";
import Secondpag from "./secondpage";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className=" h-[100vh] bg-netflixphoto bg-no-repeat bg-cover  ">
          <Email />
        </div>
        <Secondpag />
      </div>
    );
  }
}

export default App;
