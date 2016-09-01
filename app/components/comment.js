import React from 'react';

class Comment extends React.Component{
	render(){
		return (
			<div className="comment">
				<em className="name">{this.props.comment.name}</em>
				<p className="content">{this.props.comment.content}</p>
			</div>
		);
	}
}

export default Comment;
