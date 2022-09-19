import React from "react";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <div className="project">
      <Container maxWidth="lg">
        <Typography variant="h3" className="project-pd-100">
          Các project trước đây của tôi
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <CardProject
              title="To do list"
              des="App dùng để quản lý, sắp xếp công việc một cách thông minh. "
              img="pic1"
              link="https://hoangnamwar.github.io/To-do-list/"
              date="11/2021"
            />
          </Grid>
          <Grid item lg={4}>
            <CardProject
              title="Wallet"
              des="App dùng để quản lý thu chi, tiền bác. Sắp xếp các khoản tiền."
              img="pic2"
              link="http://hoangnamwar.github.io/Wallet/"
              date="11/2021"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
