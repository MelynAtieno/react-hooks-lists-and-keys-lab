import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        
       <ProjectItem key={ProjectItem.id}
        name={ProjectItem.name}
        about={ProjectItem.about}
        technologies={ProjectItem.technologies}/>
      /* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
