import React from 'react';

import * as Style from './NavStyles';

const Nav = ({}) => (
  <Style.Wrapper>
    <Style.LogoWrapper>
      <Style.Logo>
        <Style.LogoText>PR</Style.LogoText>
      </Style.Logo>
    </Style.LogoWrapper>
    <Style.TabsWrapper>
      <Style.Tabs>
        <Style.TabText style={{ borderBottom: '2px solid #96ffca' }}>
          <Style.Link>Background</Style.Link>
        </Style.TabText>
        <Style.TabText style={{ borderBottom: '2px solid #1544c0' }}>
          <Style.Link>Skills</Style.Link>
        </Style.TabText>
        <Style.TabText style={{ borderBottom: '2px solid #1544c0' }}>
          <Style.Link>Projects</Style.Link>
        </Style.TabText>
      </Style.Tabs>
    </Style.TabsWrapper>
    <Style.Contact>Contact</Style.Contact>
  </Style.Wrapper>
);

export default Nav;
