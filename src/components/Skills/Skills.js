import React from 'react';

import * as Style from './SkillsStyles';
import skills from './data';

const Skills = () => (
  <Style.Wrapper>
    <Style.InnerWrapper>{skills.map(renderSkill)}</Style.InnerWrapper>
  </Style.Wrapper>
);

const renderSkill = ({ title, Icon, description, toolkitItems }) => (
  <Style.Column key={title}>
    <Icon color="rgb(140, 67, 255)" size={40} />
    <Style.Title>{title}</Style.Title>
    <Style.Description>{description}</Style.Description>
    <Style.ToolkitTitle>Toolkit:</Style.ToolkitTitle>
    {toolkitItems.map(renderToolkitItem)}
  </Style.Column>
);

const renderToolkitItem = (item) => <Style.ToolkitItem key={item}>{item}</Style.ToolkitItem>;

export default Skills;
