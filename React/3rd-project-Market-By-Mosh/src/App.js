import './App.css';
import Counters from './components/Counters';
import Navbar from './components/Navbar';
import React , { Component } from 'react';

export default class App extends Component {
	state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    constructor() {
        super();
        console.log("App - Constructor");
    }

    componentDidMount() {
        console.log("App - Mounted");
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters })
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
    };
 
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    };
	render() {
        console.log("App - Renderd");
		return (
			<div>
				<React.Fragment>
			<Navbar
				totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
			<main className="container">
				<Counters
					counters={this.state.counters}
					onReset={this.handleReset}
					onDelete={this.handleDelete}
					onIncrement={this.handleIncrement}/>
			</main>
			</React.Fragment>
			</div>
		)
	}
}
