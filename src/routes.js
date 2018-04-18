import React from 'react'
import { Router, Switch } from 'react-router'

// importing Components

import Home from './home';
import Blog from './blog';

export default(
<Switch>
	
	<Route exact path="/" component={Home} />

	<Route exact path="/blog" component={Blog} />

</Switch>
);