import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Skills from '../Skills/Skills';
import { Wrapper, InnerWrapper, Container } from './AppStyles';

const App = ({}) => (
  <Router>
    <Wrapper>
      <Nav />
      <InnerWrapper>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/skills" component={Skills} />
          </Switch>
        </Container>
      </InnerWrapper>
    </Wrapper>
  </Router>
);

export default App;
