import React, { PureComponent } from "react";
import Heading from "../elements/Heading";

export default class Portfolio extends PureComponent {
    render(){
        return (
            <div className="component-wrap portfolio">
                <Heading title="Portfolio"/>
                <p>With almost a decade of work, most of it NDAed I have to rethink what I display here. To get a better idea of my work, please see my <a href="https://s3.amazonaws.com/www.timhilton.net/TimHiltonResume2021.pdf">Resume</a>.</p>
            </div>
        )
    }
}
