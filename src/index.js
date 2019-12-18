import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './components/redux/reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

);
ReactDOM.render(
  <div>
<Provider store={store} > 
<App />
</Provider>
</div>
, document.getElementById('root'));
registerServiceWorker();
