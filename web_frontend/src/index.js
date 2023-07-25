import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Bar from './Components/NavigationBar';
import SignOut from './Components/SignOut';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import Inbox from './Components/Inbox';
import About from './Components/About';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const routing = (
    <Router>
      <React.StrictMode>
        <Bar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/inbox" component={Inbox}/>
          <Route exact path="/about" component={About}/>
          
          <Route path="/signout" component={SignOut} />
          
        </ Switch>
      </React.StrictMode>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();