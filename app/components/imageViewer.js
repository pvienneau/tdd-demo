import React from 'react';

import Image from './image';
import CommentListing from './commentListing';

class ImageViewer extends React.Component{
	render(){
		return (
			<div className="image-viewer">
				<Image url={this.props.image.src} />
				<CommentListing saveComment={this.props.saveComment} comments={this.props.image.comments} />
			</div>
		);
	}
}

ImageViewer.defaultProps = {
	image: {
		src:'',
		comments: []
	}
}

export default ImageViewer;
