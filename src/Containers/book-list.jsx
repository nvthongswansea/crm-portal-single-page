import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.renderList=this.renderList.bind(this);
	}
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li className="list-group-item">{book.title}</li>
				);
		});
	}
	render() {
		return (
			<ul className="list-group">
			{this.renderList()}
			</ul>
			);
	}
}

function mapStateToProps(state) {
	return {
		books: state.book
	};
}

export default connect(mapStateToProps)(BookList);