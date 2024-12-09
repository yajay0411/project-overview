import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCardList = () => {
  const projects = [
    {
      id: "P-11",
      name: "Project Name",
      progress: 50,
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      teamSize: "10+",
      files: 20,
    },
    {
      id: "P-12",
      name: "Project Name",
      progress: 65,
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      teamSize: "10+",
      files: 122,
    },
    {
      id: "P-13",
      name: "Project Name",
      progress: 30,
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      teamSize: "10+",
      files: 10,
    },
  ];
  return (
    <>
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          <ProjectCard projectData={project} />
        </React.Fragment>
      ))}
    </>
  );
};

export default ProjectCardList;
