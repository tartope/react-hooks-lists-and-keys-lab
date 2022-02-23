import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const techSpan = technologies.map((technology) => {
    return <span key={technology}>{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techSpan}
      </div>
    </div>
  );
}

export default ProjectItem;

// make variableName and assign to prop(technologies), map() and return span tag with key and technology as textContent; add variableName to return with div.