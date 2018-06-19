import React from 'react';

import * as Style from './NavStyles';

const Nav = () => (
  <Style.Wrapper>
    <Style.Name>
      <Style.Link style={Style.name} to="/">
        Patrick Rivera
      </Style.Link>
    </Style.Name>
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
        <Style.LinkTag style={{ textDecoration: 'none' }} href="mailto:patrick.x.rivera@gmail.com">
          Contact
        </Style.LinkTag>
      </Style.TabText>
    </Style.Tabs>
  </Style.Wrapper>
);

export default Nav;
