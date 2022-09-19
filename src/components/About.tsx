import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import developer from "../assets/developer2.jpg";
import html from "../assets/icons8-html-5-48.png";
import css from "../assets/icons8-css3-48.png";
import js from "../assets/icons8-javascript.svg";
import ts from "../assets/icons8-typescript-48.png";
import react from "../assets/icons8-react-40.png";
import redux from "../assets/icons8-redux-48.png";
import mui from "../assets/icons8-material-ui-48.png";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();

  return (
    <div className="about">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              variant="h4"
              sx={{
                paddingBottom: "20px",
                color: `${theme.status.colorTxtSpecial}`,
              }}
            >
              Về bản thân tôi
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
              Tôi là người khá vui vẻ và hòa đồng, nhiệt tình và đôi khi (chỉ
              đôi khi) có phần hơi năng động ^-^.
            </Typography>
            <Typography variant="body1">
              Tôi có đam mê rất lớn với lập trình và tôi đang trên đường thực
              hiện đam mê đó. Tôi cũng có một số sở thích khác như đọc sách, xem
              phim và bóng đá và mong muốn có thể tìm được những người đồng
              nghiệp tương lai cũng cùng chung các sở thích đó.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                color: `${theme.status.colorTxtSpecial}`,
              }}
            >
              Mục tiêu nghề nghiệp
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
              Tôi mong muốn có thể trở thành một lập trình viên của công ty, sử
              dụng kiến thức và kĩ năng tôi có để có thể phát triển bản thân và
              trau dồi thêm các kinh nghiệm để có thể trở thành một phần chính
              thức của công ty.
            </Typography>
            <Typography variant="body1">
              Trong dài hạn tôi định hướng trở thành lập trình viên fullstack
              cũng như có thể thử thách bản thân mình với một số các lĩnh vực
              lập trình mới. Và tập trung thêm thời gian cho việc học ngoại ngữ.
            </Typography>
          </Grid>
          <Grid item lg={6} md={6}>
            <img className="home-img" src={developer} alt="img developer" />
          </Grid>
        </Grid>
        <div className="about-top">
          <Typography
            variant="h2"
            className="about-center"
            sx={{ paddingBottom: "50px" }}
          >
            Skill
          </Typography>
          <Grid
            container
            spacing={3}
            className="about-flex"
            justifyContent="center"
          >
            <Grid item>
              <img
                src={html}
                alt="html"
                className="about-icon"
                style={{ border: `3px solid ${theme.status.colorTxtSpecial}` }}
              />
            </Grid>
            <Grid item>
              <img
                src={css}
                alt="css"
                className="about-icon"
                style={{ border: `3px solid ${theme.status.colorTxtSpecial}` }}
              />
            </Grid>
            <Grid item>
              <img
                src={js}
                alt="js"
                className="about-icon"
                style={{ border: `3px solid ${theme.status.colorTxtSpecial}` }}
              />
            </Grid>
            <Grid item>
              <img
                src={ts}
                alt="ts"
                className="about-icon"
                style={{ border: `3px solid ${theme.status.colorTxtSpecial}` }}
              />
            </Grid>
            <Grid item>
              <img
                src={react}
                alt="react"
                className="about-icon"
                style={{ border: `3px solid ${theme.status.colorTxtSpecial}` }}
              />
            </Grid>
            <Grid item>
              <img
                src={redux}
                alt="redux"
                className="about-icon"
                style={{ border: `3px solid ${theme.status.colorTxtSpecial}` }}
              />
            </Grid>
            <Grid item>
              <img
                src={mui}
                alt="mui"
                className="about-icon"
                style={{ border: `3px solid ${theme.status.colorTxtSpecial}` }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default About;
