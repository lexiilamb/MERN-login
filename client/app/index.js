import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// List of pages to route
import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import HelloWorld from './components/HelloWorld/HelloWorld';
import NewPage from './components/NewPage/NewPage';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
		// Routes to all of the pages
        <Route exact path="/" component={Home}/>        
		<Route path="/newpage" component={NewPage}/>
		<Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
