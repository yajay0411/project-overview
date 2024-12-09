import React from "react";
import ProjectCard from "./ProjectCard";
import css from "./ProjectCardDisplay.module.css";

const ProjectCardDisplay = () => {
  const statuses = [
    { label: "Not Started" },
    { label: "In Progress" },
    { label: "Archived" },
    { label: "Completed" },
  ];

  const projects = [
    {
      id: 1,
      name: "Techyon Software-1",
      owner: "Techyon",
      tasks: 50,
      progress: 50,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 2,
      name: "Techyon Software-2",
      owner: "Techyon",
      tasks: 20,
      progress: 25,
      status: "In Progress",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 3,
      name: "Techyon Software-3",
      owner: "Techyon",
      tasks: 10,
      progress: 100,
      status: "Completed",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 4,
      name: "Techyon Software-4",
      owner: "Techyon",
      tasks: 0,
      progress: 0,
      status: "Archived",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 5,
      name: "Techyon Software-5",
      owner: "Techyon",
      tasks: 20,
      progress: 40,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 6,
      name: "Techyon Software-6",
      owner: "Techyon",
      tasks: 20,
      progress: 25,
      status: "In Progress",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 7,
      name: "Techyon Software-7",
      owner: "Techyon",
      tasks: 10,
      progress: 100,
      status: "Completed",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 8,
      name: "Techyon Software-8",
      owner: "Techyon",
      tasks: 0,
      progress: 0,
      status: "Archived",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
  ];

  const StatusObj = {
    "Not Started": "not-started",
    "In Progress": "in-progress",
    Completed: "completed",
    Archived: "archived",
  };

  return (
    <div className={css["flex-row"]}>
      {statuses.map((status, index) => (
        <div key={`${status.label}_${index}`} className={css["flex-col"]}>
          <p
            className={`${css["project-status-title"]} ${
              css[StatusObj[status.label]]
            }`}
          >
            <span> {status.label}</span>
            <span>
              {
                projects.filter((project) => project.status === status.label)
                  .length
              }
            </span>
          </p>

          {projects
            .filter((project) => project.status === status.label)
            .map((project) => (
              <ProjectCard key={project.id} projectData={project} />
            ))}
          <button className={css["view-more-btn"]}>View More</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardDisplay;
