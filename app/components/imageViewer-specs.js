import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ImageViewer from './imageViewer';
import Image from './image';
import CommentListing from './commentListing';
import Comment from './comment';


describe('ImageViewer component', () => {
	it('should render an Image and CommentListing component', () => {
		//Arrange

		//Act
		const wrapper = shallow(<ImageViewer />);

		//Assert
		expect(wrapper.find(Image).length).toEqual(1);
		expect(wrapper.find(CommentListing).length).toEqual(1);
	});
});
