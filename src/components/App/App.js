import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import { Wrapper } from './AppStyles';

const App = ({}) => (
  <Router>
    <Wrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
