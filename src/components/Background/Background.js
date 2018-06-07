import React from 'react';
import BodyBackgroundColor from 'react-body-backgroundcolor';

import * as Style from './BackgroundStyles';

const Background = ({}) => (
  <BodyBackgroundColor backgroundColor="#1544c0">
    <Style.HeadingWrapper>
      <Style.Heading>Mind of an Engineer. Heart of a Designer.</Style.Heading>
      <Style.SubHeading>
        Passionate about building products that solve problems in education, healthcare, and
        productivity.
      </Style.SubHeading>
      <Style.ChevronIcon>
        <a href="#background" />
      </Style.ChevronIcon>
    </Style.HeadingWrapper>
  </BodyBackgroundColor>
);

export default Background;
