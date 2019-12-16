import React from 'react';
import { render } from 'react-dom';

function renderApp() {
  // eslint-disable-next-line global-require
  const App = require('./components/App').default;
  render(<App />, document.getElementById('app'));
}

renderApp();

// eslint-disable-next-line no-unused-expressions
module.hot?.accept(renderApp);
