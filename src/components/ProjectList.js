import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectListItems = projects.map((project) => {
    return <ProjectItem 
              key={project.id}
              name={project.name}
              about={project.about}
              technologies={project.technologies}
            /> 
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}{projectListItems}</div>
    </div>
  );
}

export default ProjectList;

// within function, above return for div, create variableName and assign to map(); return ProjectItem component and add props{project.key pairs}; put {variableName} down in return div afterEach.