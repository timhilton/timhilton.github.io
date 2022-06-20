import React, { PureComponent } from "react"

class Heading extends PureComponent {
    render() {
		return (
            <div className="component-heading">
              <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Heading
