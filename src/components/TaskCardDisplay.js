import React from "react";
import ProjectCard from "./ProjectCard";
import css from "./ProjectCardDisplay.module.css";

const TaskCardDisplay = () => {
  const statuses = [
    { label: "In Review" },
    { label: "On Track" },
    { label: "Delayed" },
    { label: "In Revision" },
  ];

  const tasks = [
    {
      id: "T1",
      name: "Task-1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      tasks: 50,
      progress: 50,
      status: "In Review",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
      expStartDate: "29/10/2024",
      expEndDate: "29/10/2025",
    },
    {
      id: "T2",
      name: "Task-2",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      tasks: 20,
      progress: 25,
      status: "On Track",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
      expStartDate: "29/10/2024",
      expEndDate: "29/10/2025",
    },
    {
      id: "T3",
      name: "Task-3",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      tasks: 10,
      progress: 100,
      status: "Delayed",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
      expStartDate: "29/10/2024",
      expEndDate: "29/10/2025",
    },
    {
      id: "T4",
      name: "Task-4",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      tasks: 0,
      progress: 0,
      status: "In Revision",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
      expStartDate: "29/10/2024",
      expEndDate: "29/10/2025",
    },
  ];

  const StatusObj = {
    "On Track": "on-track",
    "In Revision": "in-revision",
    "In Review": "in-review",
    Delayed: "delayed",
  };

  return (
    <div className={css["flex-row"]}>
      {statuses.map((status) => (
        <div className={css["flex-col"]}>
          <p
            className={`${css["project-status-title"]} ${
              css[StatusObj[status.label]]
            }`}
          >
            <span> {status.label}</span>
            <span>
              {tasks.filter((task) => task.status === status.label).length}
            </span>
          </p>

          {tasks
            .filter((task) => task.status === status.label)
            .map((task) => (
              <ProjectCard key={task.id} projectData={task} isTask={true} />
            ))}
          <button className={css["view-more-btn"]}>View More</button>
        </div>
      ))}
    </div>
  );
};

export default TaskCardDisplay;
