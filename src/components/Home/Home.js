import React from 'react';

import * as Style from './HomeStyles';
import icons from './data';

const Home = () => (
  <Style.Wrapper>
    <Style.InnerWrapper>
      <Style.Headline>Full-Stack Engineer</Style.Headline>
      <Style.Description>
        {`After internships in Strategy Consulting and Product Management at a Series-A startup, I
        realized what I enjoyed most was building products that solve important problems. As a
        result, I've built web apps, bots, and chrome extensions to solve daily problems. I enjoy obsessing over
        user experience, maintainable code, and functional programming.`}
      </Style.Description>
      <Style.Image src={require('./profile-pic.jpg')} />
      <Style.SocialWrapper>{icons.map(renderIcon)}</Style.SocialWrapper>
    </Style.InnerWrapper>
  </Style.Wrapper>
);

const renderIcon = ({ link, Icon }) => (
  <Style.Icon href={link} target="_blank" key={link}>
    <Icon style={Style.icon} />
  </Style.Icon>
);

export default Home;
