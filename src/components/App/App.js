import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Background from '../Background/Background';
import Nav from '../Nav/Nav';
import { Wrapper } from './AppStyles';

const App = ({}) => (
  <Router>
    <Wrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Background} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
