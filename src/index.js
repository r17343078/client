import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import NavigationBar from './components/NavigationBar';
import reportWebVitals from './reportWebVitals';

import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);


ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Router>
        <div>
          <NavigationBar/> 
          {routes}
        </div>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
