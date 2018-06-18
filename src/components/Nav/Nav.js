import React from 'react';

import * as Style from './NavStyles';

const Nav = () => (
  <Style.Wrapper>
    <Style.Link style={Style.name} to="/">
      Patrick Rivera
    </Style.Link>
    <Style.Tabs>
      <Style.TabText style={Style.tabText}>
        <Style.Link to="/projects" activeStyle={Style.active}>
          Projects
        </Style.Link>
      </Style.TabText>
      <Style.TabText style={Style.tabText}>
        <Style.Link to="/skills" activeStyle={Style.active}>
          Skills
        </Style.Link>
      </Style.TabText>
      <Style.TabText>
        <Style.Link to="/contact" activeStyle={Style.active}>
          Contact
        </Style.Link>
      </Style.TabText>
    </Style.Tabs>
  </Style.Wrapper>
);

export default Nav;
