import React from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import css from "./ProjectCard.module.css";

const ProjectCard = ({ projectData, isTask }) => {
  const StatusObj = {
    "On Track": "on-track",
    "In Revision": "in-revision",
    "In Review": "in-review",
    Delayed: "delayed",
  };
  return (
    <Card
      sx={{
        width: 350,
        maxWidth: 400,
        padding: "10px",
        borderRadius: "10px",
        boxShadow: 3,
        overflow: "visible",
      }}
    >
      <CardContent>
        {/* Project Name and ID */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <FolderIcon color="primary" sx={{ marginRight: "5px" }} />
            <Typography variant="body1" fontWeight="bold">
              {projectData.name}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" fontWeight="bold">
            ID {projectData.id}
          </Typography>
        </Box>

        {/* Status Tag */}
        {isTask && (
          <div
            className={`${css.statusTag} ${css[StatusObj[projectData.status]]}`}
          >
            {projectData.status}
          </div>
        )}

        {/* Progress Bar */}
        <Box mt={2} mb={2}>
          <LinearProgress
            variant="determinate"
            value={projectData?.progress}
            className={css["LinearProgress"]}
          />
          <span className={css["percentage"]}>{projectData.progress}%</span>
        </Box>

        {/* Dates */}
        <Box display="flex" alignItems="center" mt={1} mb={2}>
          <Typography variant="body2">
            📅 {projectData.startDate} - {projectData.endDate}
          </Typography>
        </Box>

        {/* Team and Files */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <img
              src="https://via.placeholder.com/32" // Placeholder for team avatar
              alt="team"
              style={{
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                marginRight: "5px",
              }}
            />
            <Typography variant="body2">{projectData.teamSize}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <InsertDriveFileIcon color="action" sx={{ marginRight: "5px" }} />
            <Typography variant="body2">{projectData.files} Files</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
