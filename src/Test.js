import React from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectCardList from "./components/ProjectCardList";
import ProjectTable from "./components/ProjectTable";
import TaskTable from "./components/TaskTable";

const Test = () => {
  const project = {
    id: 1,
    name: "Techyon Software",
    owner: "Techyon",
    tasks: 50,
    progress: 50,
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  };
  return (
    <>
      <div>
        <h1>ProjectCard ::</h1>
        <ProjectCard projectData={project} />
      </div>
      <div>
        <h1>ProjectCardList ::</h1>
        <ProjectCardList />
      </div>
      <div>
        <h1>ProjectTable ::</h1>
        <ProjectTable />
      </div>
      <div>
        <h1>TaskTable ::</h1>
        <TaskTable />
      </div>
    </>
  );
};

export default Test;
