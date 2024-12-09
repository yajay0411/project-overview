import { LinearProgress } from "@mui/material";
import React from "react";
import css from "./ProjectTable.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CircleIcon from "@mui/icons-material/CircleOutlined";
import TaskIcon from "@mui/icons-material/Task";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";

const projects = [
  {
    id: 1,
    name: "Techyon Software1",
    owner: "Techyon",
    tasks: 50,
    progress: 50,
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 2,
    name: "Techyon Software2",
    owner: "Techyon",
    tasks: 20,
    progress: 25,
    status: "In Progress",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 3,
    name: "Techyon Software3",
    owner: "Techyon",
    tasks: 10,
    progress: 100,
    status: "Completed",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 4,
    name: "Techyon Software4",
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

const ProjectTable = () => {
  return (
    <div className={css["table-container"]}>
      <table className={css["table"]}>
        <thead className={css["thead"]}>
          <tr className={css["tr"]}>
            <th className={css["th"]}>ID</th>
            <th className={css["th"]}>
              <span>
                <FolderIcon
                  style={{
                    fontSize: "16px",
                    marginRight: "5px",
                    position: "relative",
                    top: "2px",
                  }}
                />
              </span>
              Project Name
            </th>
            <th className={css["th"]}>%</th>
            <th className={css["th"]}>
              <span>
                <PersonIcon
                  style={{
                    fontSize: "16px",
                    marginRight: "5px",
                    position: "relative",
                    top: "2px",
                  }}
                />
              </span>
              Owner
            </th>
            <th className={css["th"]}>
              <span>
                <TaskIcon
                  style={{
                    fontSize: "16px",
                    marginRight: "5px",
                    position: "relative",
                    top: "2px",
                  }}
                />
              </span>
              Tasks
            </th>
            <th className={css["th"]}>
              <span>
                <CircleIcon
                  style={{
                    fontSize: "16px",
                    marginRight: "5px",
                    position: "relative",
                    top: "2px",
                  }}
                />
              </span>
              Status
            </th>
            <th className={css["th"]}>
              <span>
                <CalendarTodayIcon
                  style={{
                    fontSize: "16px",
                    marginRight: "5px",
                    position: "relative",
                    top: "2px",
                  }}
                />
              </span>
              Start Date
            </th>
            <th className={css["th"]}>
              <span>
                <CalendarTodayIcon
                  style={{
                    fontSize: "16px",
                    marginRight: "5px",
                    position: "relative",
                    top: "2px",
                  }}
                />
              </span>
              End Date
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className={css["tr"]}>
              <td className={css["td"]}>{project.id}</td>
              <td className={css["td"]}>{project.name}</td>
              <td className={css["td"]}>{project.progress}%</td>
              <td className={css["td"]}>{project.owner}</td>
              <td className={css["td"]}>
                <div className={css["center"]}>
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    className={css["LinearProgress"]}
                  ></LinearProgress>
                  <span className={css["percentage"]}>{project.progress}%</span>
                </div>
              </td>
              <td
                className={`${css["td"]} ${
                  css[`${StatusObj[project.status]}`]
                }`}
              >
                {project.status}
              </td>
              <td className={css["td"]}>{project.startDate}</td>
              <td className={css["td"]}>{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
