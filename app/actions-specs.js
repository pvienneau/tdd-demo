import React from 'react';

import * as actions from './actions';
import * as types from './actionTypes';

describe('Action Creators', () => {
	it('should generate an action object for SAVE_COMMENT', () => {
		//Arrange
		const comment = 'comment';
		const expectedActionObject = {
			type: types.SAVE_COMMENT,
			comment: comment
		};

		//Act
		const returnedActionObject = actions.saveComment({
			comment: comment
		});

		//Assert
		expect(returnedActionObject).toEqual(expectedActionObject);
	});

	it('should generate an action object for DELETE_COMMENT', () => {
		//Arrange
		const expectedActionObject = {
			id: 5,
			type: types.DELETE_COMMENT
		}

		//Act
		const returnedActionObject = actions.deleteComment(expectedActionObject.id);

		//Assert
		expect(returnedActionObject).toEqual(expectedActionObject);
	});
});
