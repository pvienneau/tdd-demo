import * as types from './actionTypes';

const initialState = {
	src: false,
	comments: []
};

function reducer(state = initialState, action = {}){
	switch(action.type){
		case types.SAVE_COMMENT:
			let newComment = {
				name: action.name,
				content: action.content,
				id: state.comments.length+1
			}

			let newState = Object.assign({}, state);
			newState.comments.push(newComment);

			return newState;
	}

	return state;
}

export default reducer;
