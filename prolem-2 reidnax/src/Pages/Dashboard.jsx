// src/components/Dashboard.js
import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Analytics from "./Analytics";
import Data from "./Data";

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexDirection: "column",
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Dashboard tabs"
      >
        <Tab label="Analytics" />
        <Tab label="Data" />
      </Tabs>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {value === 0 && <Analytics />}
        {value === 1 && <Data />}
      </Box>
    </Box>
  );
};

export default Dashboard;
