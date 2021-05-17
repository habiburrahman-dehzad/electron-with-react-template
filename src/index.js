import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import App from './components/App';

ReactDOM.render(
  <Root>
    <React.StrictMode>
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </React.StrictMode>
  </Root>,
  document.getElementById('root')
);
