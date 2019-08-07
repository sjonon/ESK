import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MainNav from './components/MainNav';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/schedule" component={Schedule} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
