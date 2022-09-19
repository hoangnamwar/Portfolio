import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography, useTheme } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: `${theme.palette.secondary.main}`,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          className="footer-text"
          sx={{ color: `${theme.status.txt}` }}
        >
          @Idea from
          <Link
            sx={{
              color: `${theme.status.txt}`,
              fontStyle: "oblique",
              fontWeight: 200,
              padding: "5px",
            }}
            href="https://soumyajit.tech/"
            target="_blank"
          >
            Soumyajit Behera{" "}
          </Link>
          and
          <Link
            sx={{
              color: `${theme.status.txt}`,
              fontStyle: "oblique",
              fontWeight: 200,
              padding: "5px",
            }}
            href="https://developer-portfolio-1hanzla100.vercel.app/"
            target="_blank"
          >
            Hanzla
          </Link>
          <span style={{ padding: "50px" }}></span>
          @Design and develop from Hoang Nam
          <span style={{ padding: "50px" }}></span>
          Sourcode on
          <Link
            sx={{
              color: `${theme.status.txt}`,
              fontStyle: "oblique",
              fontWeight: 200,
              padding: "5px",
            }}
            href="https://github.com/hoangnamwar/Portfolio/tree/main"
            target="_blank"
          >
            Github
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
