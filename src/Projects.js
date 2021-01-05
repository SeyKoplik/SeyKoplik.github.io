import React from 'react';
import projects from './Projects.json';
import "./styles.css";
import ProjectModal from "./ProjectModal";


function Projects() {
  const oneProject = projects.map(oneData =>

    <ProjectModal
      title={oneData.title}
      repo_url={oneData.repo_url}
      demo_img={oneData.demo_img}
      deployed_url={oneData.deployed_url}
      key={oneData.id}
      description={oneData.description}
    />

  )

  return (

    <div className="scrolling-wrapper">

      {oneProject}

    </div>

  )
}

export default Projects