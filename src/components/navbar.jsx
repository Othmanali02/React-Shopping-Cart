import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<a className="navbar-brand" href="/">
					Shopping Cart
					<span className="Counter">{this.props.countItems}</span>
				</a>
			</nav>
		);
	}
}

export default Navbar;
