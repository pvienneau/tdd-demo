import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CommentListing from './commentListing';
import Comment from './comment';

describe('Comment component', () => {
	it('should generate a name and comment tag with the proper values', () => {
		//Arrange
		const comment = {
			id: 1,
			name: 'Jane Blue',
			content: 'Here is a comment.'
		};

		//Act
		const wrapper = render(<Comment comment={comment} />);

		//Assert
		expect(wrapper.find('.name').length).toEqual(1);
		expect(wrapper.find('.content').length).toEqual(1);
		expect(wrapper.find('.name').text()).toEqual(comment.name);
		expect(wrapper.find('.content').text()).toEqual(comment.content);

	});
});
