import React from 'react';
import ReactDOM from 'react-dom';
import ReactTap from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './store';

import Page from './components/page';

ReactTap();

ReactDOM.render(
	<Provider store={store}>
		<Page />
	</Provider>
	, document.getElementById('app')
);
