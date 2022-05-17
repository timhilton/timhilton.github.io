import React, { PureComponent } from "react";

import IconNav from "./IconNav";
import Intro from "./Intro";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default class Home extends PureComponent {
    render(){
      return (
          <div className="content-container">
            <Sidebar />
            <TopNav/>
            <main className="main">
                <Intro />
                <IconNav />
            </main>
          </div>
      );
    }
}
