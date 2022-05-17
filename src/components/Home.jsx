import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Ampersand from "../elements/Ampersand";
import Iconpathline from "../elements/IconPathLine";
import Mail from "../elements/Mail";
import Resume from "../elements/Resume";
import Terminal from "../elements/Terminal";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default class Home extends PureComponent {
    render(){
      return (
          <div className="content-container">
            <Sidebar />
            <TopNav/>
            <main className="main">
                <section className="content">
                    <div className="headings">
                        <div className="ampersand">
                            <Ampersand/>
                        </div>
                            <h3>Web Development</h3>
                            <h3>Creative Services</h3>
                    </div>
                    <p className="copy">
                    I create award winning web experiences primarily focusing on front end development, UX, accessibility, and design.
                    </p>
                </section>
                <section className="icon-nav">
                    <Iconpathline className="icon-pathline"/>
                    <nav className="icon-nav-container">
                        <Link to="/contact" className="icons icon-resume"><Resume/></Link>
                        <Link to="/contact" className="icons icon-mail"><Mail/></Link>
                        <Link to="/portfolio" className="icons icon-terminal"><Terminal/></Link>
                    </nav>
                </section>
            </main>
          </div>
      );
    }
}
