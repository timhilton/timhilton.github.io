import React, { Component } from "react";

import PortfolioModal from "./Modal.jsx";

export default class PortfolioItem extends Component {
    constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
        isOpen: false
    }
}

toggleModal() {
    console.log('clicked');
    this.setState({
		isModalOpen: !this.state.isModalOpen
    })
}

    render() {
        return (
            <div className="portItem">
                <div className={this.props.class ? `item-${parseInt(this.props.class, 10) + 4} portWrap` : "portWrap"} id={this.props.project}
                    style={{ backgroundImage: `url(https://s3.amazonaws.com/www.timhilton.net/${this.props.project}.png)` }}>
                    <div className="over" onClick={this.toggleModal}>
                        <h5 style={{color: "#fff", textTransform: "uppercase"}}>click for details</h5>
                    </div>
                    <p>{this.props.name}</p>
                </div>

                <PortfolioModal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                    title={this.props.name}
                    role={this.props.role}
                    desc={this.props.desc}
                    url={this.props.url}
                    github={this.props.github}
                />
            </div>
        )
    }
}
