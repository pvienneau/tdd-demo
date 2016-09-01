import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CommentListing from './commentListing';
import Comment from './comment';
import Page from './page';

import store from '../store';

describe('CommentListing component', () => {
	it('should generate the correct number of Comment components', () => {
		//Arrange
		const comments = [
			{
				id: 1,
				content: 'Nice photo',
				name: 'Jane Blue'
			},
			{
				id: 2,
				content: 'Where is this',
				name: 'Tommy Green'
			}
		];
		//Act
		const wrapper = shallow(<CommentListing comments={comments} />);

		//Assert
		expect(wrapper.find(Comment).length).toEqual(2);
	});

	it('should not render if no comments are passed', () => {
		//Arrange
		const comments = [];

		//Act
		const wrapper = render(<CommentListing comments={comments} />)

		//Assert
		expect(wrapper.find('.comment-listing').html()).toBeNull();
	});

	it('should generate a textarea field', () => {
		//Arrange
		const comments = [
			{
				id: 1,
				content: 'Nice photo',
				name: 'Jane Blue'
			},
			{
				id: 2,
				content: 'Where is this',
				name: 'Tommy Green'
			}
		];

		//Act
		const wrapper = render(<CommentListing comments={comments} />);

		//Assert
		expect(wrapper.find('form textarea').length).toBe(1);
	});

	it('should submit a new comment',() => {
		//Arrange
		const newCommentMessage = 'My new comment';

		//Act
		const wrapper = mount(<Page />, {
			context: {
				store: store
			}
		});
		//wrapper.find('form textarea').simulate('change', {target: {value: newCommentMessage}});
		wrapper.find('form').simulate('submit');

		//Assert
		expect(wrapper.find('form .btn-submit').length).toEqual(1);
		expect(wrapper.find('.comment').length).toEqual(4);
	});
});
