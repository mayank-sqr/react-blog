import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './common/common.css';

import routes from './routes'

import Header from './common/components/header'
import Footer from './common/components/footer'

ReactDOM.render(
	<div className="App">
		<Header />
		<div className="wrap">
			{routes}
		</div>
		<Footer />
	</div>, 
	document.getElementById('root')
);
registerServiceWorker();
