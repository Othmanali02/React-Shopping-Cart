import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-2"
					setCount={this.setCount}
				>
					Reset
				</button>
				{this.props.counters.map((counter) => (
					<Counter
						Increment={this.props.onIncrement}
						onDelete={this.props.onDelete}
						Decrement={this.props.onDecrement}
						key={counter.id}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
