import 'bootstrap/dist/css/bootstrap.min.css';
window.$ = window.jQuery=require('jquery');
window.Tether=require('tether');
require('bootstrap/dist/js/bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';

import App from './comps/App';
import HomePage from './comps/HomePage';
import AboutPage from './comps/AboutPage';
import ContactPage from './comps/ContactPage';
import HelpPage from './comps/HelpPage';
import NotFound from './comps/NotFound';

import { Router, Route, browserHistory,IndexRoute } from 'react-router';

ReactDOM.render(
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />  
      <Route path="homepage" component={HomePage} />
      <Route path="aboutpage" component={AboutPage} />
      <Route path="contactpage" component={ContactPage} />
      <Route path="helppage" component={HelpPage} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);