import React from 'react';

import Comment from './comment';

class CommentListing extends React.Component{
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.saveComment({
			name: 'Me',
			content: this.refs.txtComment.value
		});
	}

	render(){
		var commentListing = null;

		if(this.props.comments.length > 0){
			commentListing = (
				<ul className="comment-listing">
					{this.props.comments.map(function(comment, index){
						return (
							<li key={index}>
								<Comment comment={comment}/>
							</li>
						);
					})}
				</ul>
			);
		}

		return (
			<div className="comment-wrapper">
				{commentListing}
				<form onSubmit={this.handleSubmit}>
					<textarea ref="txtComment" placeholder="Enter comment here"></textarea>
					<input className="btn-submit" type="submit" value="submit" />
				</form>
			</div>
		);
	}
}

CommentListing.defaultProps = {
	comments: []
}

export default CommentListing;
