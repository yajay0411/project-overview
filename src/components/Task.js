import React, { useState } from "react";
import css from "./Task.module.css"; // Import CSS modul
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterIcon from "@mui/icons-material/FilterList";
import TaskTable from "./TaskTable";
import TaskCardDisplay from "./TaskCardDisplay";

const Task = () => {
  const [viewType, setViewType] = useState("table");
  const toggleView = (value) => {
    setViewType(value);
  };
  return (
    <>
      {/* filter section */}
      <div className={css["div-container"]}>
        <div className={`flex`}>
          <p className={css["filter-title"]}>All Tasks</p>
          <ArrowDropDownIcon />
        </div>
        <div className="flex">
          <div>
            <button
              style={{ display: "none" }}
              className={`${css["filter-button"]} ${
                viewType === "table" ? css["active"] : ""
              }`}
              onClick={() => toggleView("table")}
            >
              <TableRowsIcon />
            </button>
            <button
              className={`${css["filter-button"]} ${
                viewType === "table" ? css["active"] : ""
              }`}
              onClick={() => toggleView("table")}
            >
              <TableRowsIcon />
            </button>
            <button
              className={`${css["filter-button"]} ${
                viewType === "card" ? css["active"] : ""
              }`}
              onClick={() => toggleView("card")}
            >
              <ViewModuleIcon />
            </button>
            <button
              className={`${css["filter-button"]} ${
                viewType === "filter" ? css["active"] : ""
              }`}
              onClick={() => toggleView("filter")}
            >
              <FilterIcon />
            </button>
            <button className={css["filter-setting"]}>
              <MoreVertIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={css["div-container"]}>
        {(viewType === "table" || viewType === "filter") && <TaskTable />}
        {viewType === "card" && <TaskCardDisplay />}
      </div>
    </>
  );
};

export default Task;
