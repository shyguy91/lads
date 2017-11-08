import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Lessons from './components/teacher/lessons/lessons'
import Lesson from './components/teacher/lesson/lesson'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props, { match }) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
          <Switch>
            <Route exact path="/lessons" component={Lessons} />
            {/* <Route exact path={`${this.props.match.path}/:number`}  component={Lesson} /> */}
            <Route exact path="/lesson" component={Lesson} />
            <Redirect from="/" to="/lessons" />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
