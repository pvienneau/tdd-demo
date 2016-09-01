import * as actionTypes from './actionTypes';

export function saveComment(data){
	return {
		...data,
		type: actionTypes.SAVE_COMMENT
	};
}

export function deleteComment(id){
	return {
		id: id,
		type: actionTypes.DELETE_COMMENT
	}
}
