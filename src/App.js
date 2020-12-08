import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import FormPage from './pages/Form/FormPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact component={FormPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
