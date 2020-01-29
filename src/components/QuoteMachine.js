import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
	<React.Fragment>
		<div id="quoteContainer">
			<div id="quote">{selectedQuote.quote}</div>
		</div>
		<div id="author">{selectedQuote.author}</div>
		<div id="buttonContainer">
			<a className="button" id="new-quote" onClick={assignNewQuoteIndex}>
				next quote
			</a>

			<a
				id="tweet-quote"
				target="_blank"
				href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote} - ${selectedQuote.author}`}
			>
				<FontAwesomeIcon icon={faTwitter} size="lg" />
			</a>
		</div>
	</React.Fragment>
);

export default QuoteMachine;
