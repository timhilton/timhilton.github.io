import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Iconpathline from "../elements/IconPathLine";
import Mail from "../elements/Mail";
import Resume from "../elements/Resume";
import Terminal from "../elements/Terminal";


export default class IconNav extends PureComponent {
    render(){
        return (
            <section className="icon-nav">
                <Iconpathline className="icon-pathline"/>
                <nav className="icon-nav-container">
                    <Link to="#" 
                    onClick={(e) => {
                        window.location.href = 'https://s3.amazonaws.com/www.timhilton.net/TimHiltonResume2021.pdf'
                    }} className="icons icon-resume"><Resume/></Link>
                    <Link to="#" onClick={(e) => {
                        window.location.href = 'mailto:tim@timhilton.net';
                        e.preventDefault();
                    }} className="icons icon-mail"><Mail/></Link>
                    <Link to="/portfolio" className="icons icon-terminal"><Terminal/></Link>
                </nav>
            </section>
        )
    }
}
