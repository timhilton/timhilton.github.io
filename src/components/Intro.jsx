import React, { PureComponent } from "react";

import Ampersand from "../elements/Ampersand";

export default class Intro extends PureComponent {
    render(){
        return (
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
        )
    }
}