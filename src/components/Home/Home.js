import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'react-feather';

import * as Style from './HomeStyles';

const Home = () => (
  <Style.Wrapper>
    <Style.InnerWrapper>
      <Style.Headline>Engineering, Design, and Product.</Style.Headline>
      <Style.Description>
        After internships in Strategy Consulting and Product Management at a Series-A startup, I
        realized what I enjoyed most was building products that solve important problems. As a
        result, I've built web apps, bots, and chrome extensions for fun. I enjoy obsessing over
        user experience, maintainable code, and functional programming.
      </Style.Description>
      <Style.Image src={require('./profile-pic.jpg')} />
      <Style.SocialWrapper>
        <Style.Icon href="mailto:patrick.x.rivera@gmail.com" target="_blank">
          <Mail style={Style.icon} />
        </Style.Icon>
        <Style.Icon href="https://github.com/pxr13" target="_blank">
          <Github style={Style.icon} />
        </Style.Icon>
        <Style.Icon href="https://twitter.com/priv16" target="_blank">
          <Twitter style={Style.icon} />
        </Style.Icon>
        <Style.Icon href="https://www.linkedin.com/in/patrickxrivera/" target="_blank">
          <Linkedin style={Style.icon} />
        </Style.Icon>
      </Style.SocialWrapper>
    </Style.InnerWrapper>
  </Style.Wrapper>
);

export default Home;
