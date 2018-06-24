import React, { Component } from "react"

//react modal
import Modal from "react-modal"

export default class PortfolioModal extends Component {
	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
                onRequestClose={this.props.toggle}
				shouldCloseOnOverlayClick={true}
				contentLabel="Portfolio Item Modal"
				ariaHideApp={false}
			>
            <div>
                <h2 style={{position: "absolute", top: "5px", right: "15px", cursor: "pointer", color: "#16151a"}} onClick={this.props.toggle}>x</h2>
                <h3>{this.props.title}</h3><br/>
                <h5><strong style={{textDecoration: "underline"}}>ROLE</strong><br/>{this.props.role}</h5><br/>
                <h5><strong style={{textDecoration: "underline"}}>TECH USED</strong><br/>{this.props.desc}</h5>
                <div className="links">
                    <a target="_blank" href={this.props.url}><img src="https://s3.amazonaws.com/www.timhilton.net/link.png" className="link" alt="link-icon"/></a>
                    <a target="_blank" href={this.props.github} className={this.props.github ? "" : "hidden"}><img className="link" src="https://s3.amazonaws.com/www.timhilton.net/GitHub-Mark-120px-plus.png" alt="github-icon"/></a>
                </div>
            </div>
            </Modal>
        )
    }
}
