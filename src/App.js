import React, { Component } from 'react';
import { random } from 'lodash';
import QuoteMachine from './components/QuoteMachine';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
			selectedQuoteIndex: null
		};
	}

	componentDidMount() {
		fetch('https://raw.githubusercontent.com/tomsza26/Call-of-Duty---Quotes-Machine/master/src/quotes.json')
			.then((data) => data.json())
			.then((quotes) => this.setState({ quotes }, this.assignNewQuoteIndex));
	}

	get selectedQuote() {
		if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
			return undefined;
		}
		return this.state.quotes[this.state.selectedQuoteIndex];
	}

	generateNewQuoteIndex = () => {
		if (!this.state.quotes.length) {
			return undefined;
		}
		return random(0, this.state.quotes.length - 1);
	};

	assignNewQuoteIndex = () => {
		this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
	};

	render() {
		return (
			<div id="d-flex justify-content-center">
				<div id="innerContainer">
					{this.selectedQuote ? (
						<QuoteMachine
							selectedQuote={this.selectedQuote}
							assignNewQuoteIndex={this.assignNewQuoteIndex}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default App;
