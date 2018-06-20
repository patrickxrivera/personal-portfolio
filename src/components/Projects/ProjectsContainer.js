import React, { Component } from 'react';

import Projects from './Projects';

class ProjectsContainer extends Component {
  state = {
    hideGifs: false
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ hideGifs: window.innerWidth <= 760 });
  }

  render() {
    console.log(this.state.hideGifs);
    return <Projects hideGifs={this.state.hideGifs} />;
  }
}

export default ProjectsContainer;
