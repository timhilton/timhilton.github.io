import React, { PureComponent } from "react"
import Caret from "./Caret";

class Heading extends PureComponent {
    render() {
		return (
            <div className="component-heading">
              <h1>{this.props.title}</h1>
              <Caret />
            </div>
        )
    }
}

export default Heading
