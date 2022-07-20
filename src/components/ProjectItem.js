import React from "react";

function ProjectItem({ name, about, technologies,}) {
  const arrayList = technologies.map((obj)=> {
    return <span>{obj}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {arrayList}
      </div>
    </div>
  );
}

export default ProjectItem;
