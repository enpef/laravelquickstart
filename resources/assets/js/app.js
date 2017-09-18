require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route} from 'react-router-dom'
import promise from 'redux-promise'

import App from './components/app';
import reducers from './reducers';
import Showhome from './components/Home';
// import Addtask from './components/addtask';
// import Task from './components/task';

// ReactDOM.render(<App />, document.getElementById('addtask'));

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class gg extends React.Component{
	render() { return <div>gg</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
	    	<Route path="/home" component={Showhome} />
	    	<Route path="/tasks" component={App} />
	    </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('addtask'));

// ReactDOM.render(<Showhome />, document.getElementById('home'))