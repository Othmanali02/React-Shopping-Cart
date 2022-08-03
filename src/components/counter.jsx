import React, { Component } from "react";

class Counter extends Component {
	// state = {
	//     value: this.props.counter.value ,
	// };

	render() {
		console.log(this.props);
		return (
			<div className="Item">
				<h2 style={{ fontSize: "20px", color: "white" }}>
					{this.props.counter.title}
				</h2>
				<span style={{ fontSize: "20px" }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.Increment(this.props.counter)}
					style={{ fontSize: "15px" }}
					className="AddBtn"
				>
					+
				</button>
				<button
					onClick={() => this.props.Decrement(this.props.counter)}
					style={{ fontSize: "15px" }}
					className="MinusBtn"
				>
					-
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					style={{ fontSize: "15px" }}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}
	formatCount() {
		return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
	}
}

export default Counter;
