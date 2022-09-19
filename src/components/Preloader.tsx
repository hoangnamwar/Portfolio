import { useTheme } from "@mui/material";
import React from "react";

const Preloader = () => {
  const theme = useTheme();
  return (
    <div
      id="preloader"
      style={{
        backgroundColor: `${
          theme.palette.mode === "dark" ? "#0c0513" : "#fff"
        }`,
      }}
    ></div>
  );
};

export default Preloader;
