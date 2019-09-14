import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import axios from 'axios';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import './index.css';

import Home from './pages/Home';
// import MainNav from './components/MainNav';
import Schedule from './pages/Schedule';
import ScheduleDay from './pages/ScheduleDay';
import ScheduleVenue from './pages/ScheduleVenue';
import Sponsors from './pages/Sponsors';
import Faq from './pages/FAQ';
import Privacy from './components/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import SchedulePic from './pages/SchedulePic'
// import './App.css';

ReactDOM.render(
  <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/scheduleday" component={SchedulePic} />
          <Route exact path="/schedulevenue" component={ScheduleVenue} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </App>
  </BrowserRouter>,
  
  document.querySelector('#root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
