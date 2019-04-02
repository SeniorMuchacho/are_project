import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.querySelector("#root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();