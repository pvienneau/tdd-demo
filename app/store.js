import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducer from './reducer';

const defaultState = {
	image: {
		src:'https://upload.wikimedia.org/wikipedia/commons/2/25/Half_dome_yosemite_national_park.jpg',
		comments: [
			{
				id: 1,
				name: 'Jane Blue',
				content: 'What a shot!'
			},
			{
				id: 2,
				name: 'Tom Greeen',
				content: 'Where is that?'
			},
			{
				id: 3,
				name: 'Julie Orange',
				content: 'Wish I were there.'
			}
		]
	}
}

const rootReducer = combineReducers({
	image: reducer,
	routing: routerReducer
});

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

//export const storeHistory = syncHistoryWithStore(browserHistory, store);

export default store;
