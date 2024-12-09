import React from "react";
import css from "./TaskTable.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CircleIcon from "@mui/icons-material/CircleOutlined";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";

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

const TaskTable = () => {
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
            <th className={css["th"]}>Associated Team</th>
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
              Expiry Start Date
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
              Expiry End Date
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((project) => (
            <tr key={project.id} className={css["tr"]}>
              <td className={css["td"]}>{project.id}</td>
              <td className={css["td"]}>{project.name}</td>
              <td className={css["td"]}>{project.associatedTeam}</td>
              <td className={css["td"]}>{project.owner}</td>
              <td
                className={`${css["td"]} ${
                  css[`${StatusObj[project.status]}`]
                }`}
              >
                {project.status}
              </td>
              <td className={css["td"]}>{project.startDate}</td>
              <td className={css["td"]}>{project.endDate}</td>
              <td className={css["td"]}>{project.expStartDate}</td>
              <td className={css["td"]}>{project.expEndDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
