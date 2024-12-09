import React, { useState } from "react";
import css from "./Project.module.css"; // Import CSS modul
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterIcon from "@mui/icons-material/FilterList";
import ProjectTable from "./ProjectTable";
import Task from "./Task";
import ProjectCardDisplay from "./ProjectCardDisplay";

const Project = () => {
  const [viewType, setViewType] = useState("table");
  const toggleView = (value) => {
    setViewType(value);
  };
  return (
    <>
      {/* header section */}
      <div className={css["div-container1"]}>
        <div className={`flex`}>
          <p className={css["title"]}>Projects</p>
          <button className={css["add-button"]}>+ Projects</button>
        </div>
        <div className="flex">
          <p className={css["breadcrumb"]}>Dashboard / </p>
          <p className={`${css["breadcrumb"]} ${css["active"]}`}>
            Project-overview
          </p>
        </div>
      </div>
      {/* filter section */}
      <div className={css["div-container"]}>
        <div className={`flex`}>
          <p className={css["filter-title"]}>All Projects</p>
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
      {/* table section */}
      {(viewType === "table" || viewType === "filter") && (
        <>
          <div className={css["div-container"]}>
            <ProjectTable />
          </div>
        </>
      )}
      {viewType === "card" && (
        <div className={css["div-container"]}>
          <ProjectCardDisplay />
        </div>
      )}
      <Task viewType={viewType} toggleView={toggleView} />
    </>
  );
};

export default Project;
