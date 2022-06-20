import React, { PureComponent } from "react";
import Initials from "../elements/Initials";
import { Link } from "react-router-dom";

export default class TopNav extends PureComponent {
    render(){
      return (
        <aside className="topnav">
            <div>
                <Link to='/'><Initials/></Link>
            </div>
        </aside>
      )
    };
}