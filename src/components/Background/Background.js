import React from 'react';
import BodyBackgroundColor from 'react-body-backgroundcolor';

import * as Style from './BackgroundStyles';

const Background = ({}) => (
  <BodyBackgroundColor backgroundColor="#1544c0">
    <Style.Wrapper>
      <Style.Heading>Background.</Style.Heading>
    </Style.Wrapper>
  </BodyBackgroundColor>
);

export default Background;
