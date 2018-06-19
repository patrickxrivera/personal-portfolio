import React from 'react';
import { Chrome, Github, Link } from 'react-feather';

import * as Style from './ProjectsStyles';
import projects from './data';
import { Icon } from '../Home/HomeStyles';

const Projects = () => (
  <Style.Wrapper>
    <Style.Grid>{projects.map(renderProject)}</Style.Grid>
  </Style.Wrapper>
);

const renderProject = (p) => (
  <Style.ProjectWrapper key={p.title}>
    <Style.TitleArea>
      <Chrome />
      <Style.TitleText>{p.title}</Style.TitleText>
    </Style.TitleArea>
    <Style.Description>{p.description}</Style.Description>
    <Style.Stack>{p.stack.join(', ')}</Style.Stack>
    <Style.Links website={p.website}>
      <Icon href={p.github} target="_blank">
        <Github color="rgb(140, 67, 255, .9)" size={22} />
      </Icon>
      {p.website !== null && (
        <Icon href={p.website} target="_blank">
          <Link color="rgb(140, 67, 255, .9)" size={22} />
        </Icon>
      )}
    </Style.Links>
  </Style.ProjectWrapper>
);

export default Projects;
