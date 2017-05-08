import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import thunk from 'redux-thunk';

import App from './components/App';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
/* eslint-disable no-underscore-dangle */
const store = createStoreWithMiddleware(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
/* eslint-enable */

const rootEl = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl,
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    // This for HMR
    /* eslint-disable global-require */
    const NextApp = require('./components/App').default;
    /* eslint-enable global-require */
    render(NextApp);
  });
}
