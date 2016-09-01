import React from 'react';

import reducer from './reducer';
import * as actions from './actions';

describe('Reducer', () => {
	it('should return initial state', () => {
		//Arrange
		const expectedState = {
			src: false,
			comments: []
		};
		const state = undefined;
		const action = {};

		//Act
		const nextState = reducer(state, action);

		//Assert
		expect(expectedState).toEqual(nextState);
	});

	it('should create a new comment', () => {
		//Arrange
		const initialState = {
			src: 'http://www.domain.com/image.jpeg',
			comments: [
				{
					id: 1,
					name: '',
					content: ''
				},
				{
					id: 2,
					name: '',
					content:'',
				}
			]
		};
		const newComment = {
			name: 'Jane Blue',
			content: 'This is a comment!'
		}
		const expectedState = {
			src: 'http://www.domain.com/image.jpeg',
			comments: [
				{
					id: 1,
					name: '',
					content: ''
				},
				{
					id: 2,
					name: '',
					content:'',
				},
				{
					id: 3,
					name: 'Jane Blue',
					content: 'This is a comment!'
				}
			]
		};
		
		//Act
		const nextState = reducer(initialState, actions.saveComment(newComment));

		//Assert
		expect(nextState).toEqual(expectedState);
	});
});
