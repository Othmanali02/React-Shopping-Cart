import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0, title: "Super Mario Bros." },
			{ id: 2, value: 0, title: "MegaMan 3" },
			{ id: 3, value: 2, title: "Legend of Zelda" },
			{ id: 4, value: 0, title: "Mario Kart: Double Dash" },
		],
	};

	setCount = () => {
		this.setState({});
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		if (counters[index].value === 0) {
			this.setState({ counters });
		} else {
			counters[index].value--;
			this.setState({ counters });
		}
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;

		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	countCart() {
		return this.state.counters.filter((c) => c.value > 0).length;
	}
	render() {
		return (
			<React.Fragment>
				<Navbar countItems={this.countCart()} />
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
