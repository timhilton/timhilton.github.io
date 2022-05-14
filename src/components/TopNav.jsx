import React, { PureComponent } from "react";
import Initials from "../elements/Initials";

export default class TopNav extends PureComponent {
    render(){
      return (
        <aside className="topnav">
            <div>
                <Initials/>
            </div>
        </aside>
      )
    };
}