import React from 'react';
import { Chrome, Github, Link } from 'react-feather';

import * as Style from './ProjectsStyles';
import projects from './data';
import { Icon } from '../Home/HomeStyles';

const Projects = (props) => (
  <Style.Wrapper>
    <Style.Grid>{projects.map(renderProject(props))}</Style.Grid>
  </Style.Wrapper>
);

const renderProject = ({ hideGifs }) => (p) => [
  <Style.ContentWrapper hasGif={p.gif} key={p.title}>
    <Style.ProjectWrapper>
      <Style.TitleArea>
        <img style={p.image.style} src={p.image.src} />
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
    {!hideGifs &&
      p.gif && (
        <Style.ProjectWrapper>
          <img style={p.gif.style} src={p.gif.src} />
        </Style.ProjectWrapper>
      )},
  </Style.ContentWrapper>
];

export default Projects;
