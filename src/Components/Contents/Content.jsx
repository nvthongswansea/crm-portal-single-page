import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BookList from '../../Containers/book-list.jsx';

export default class Content extends Component {
	render() {
		return (
			<div className="row">
				{this.props.children}
			</div>
			);
	}
}

