import { useTheme, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();

  return (
    <Box
      className="navbar"
      sx={{
        bgcolor: `${theme.status.bgColorNav}`,
        color: `${theme.status.txt} !important`,
      }}
    >
      <Box className="navbar-left">hoang nam</Box>
      <Box className="navbar-right">
        <Box>
          <Link to="/Portfolio" className="navbar-element">
            Home
          </Link>
        </Box>
        <Box>
          <Link to="/Portfolio/about" className="navbar-element">
            About me
          </Link>
        </Box>
        {/* <Box>
          <Link to="/Portfolio/project" className="navbar-element">
            Project
          </Link>
        </Box> */}
        <Box sx={{ paddingRight: "40px" }}>
          <Link to="/Portfolio/resume" className="navbar-element">
            Resume
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
