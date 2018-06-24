import React, { PureComponent } from 'react';

import { Link } from "react-router-dom"

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap"

class NavBar extends PureComponent {
    constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
        isOpen: false
    }
}

toggle() {
    this.setState({
		isOpen: !this.state.isOpen,
        active: !this.state.active
    })
}

    render() {
        const links = ['portfolio', 'skills', 'contact'];
        const navbar = links.map(link => {
            return (
                <NavItem key={link}>
                    <NavLink tag={Link} to={"/" + link} >
                        {link}
                    </NavLink>
                </NavItem>
            )
        });

        return (
            <div className="nav-wrap">
                <Navbar light expand="md" fixed="true">
        			<NavbarBrand tag={Link} to="/">
        				<h1 className="logo">Tim Hil<span>to</span>n</h1>
        			</NavbarBrand>
        			<NavbarToggler
        				className={this.state.active ? "hamburger change" : "hamburger"}
        				right="true"
        				onClick={this.toggle}
        			>
        				<div className="bar1" />
        				<div className="bar2" />
        				<div className="bar3" />
        			</NavbarToggler>
        			<Collapse isOpen={this.state.isOpen} navbar left="true">
        				<Nav className="ml-auto" navbar>
                            {navbar}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
