import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

import ImageViewer from './imageViewer';

class Page extends React.Component{
	render(){
		return (
			<ImageViewer {...this.props} />
		);
	}
}

function mapStateToProps(state, props){
	const { image, comments } = state;

	return {
		image
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
