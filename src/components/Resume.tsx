/* eslint-disable no-multi-str */
import React from "react";
import Typography from "@mui/material/Typography";
import { Container, Grid, Box } from "@mui/material";
import TimelineResume from "./TimelineResume";

const dataExperience = [
    {
        title: "Thực tập",
        time: "12/2020 - 6/2021",
        des: "-Thực tập và làm trong một nhóm freelancer. \n \
         -Tập trung thời gian vào làm quen, học các công nghệ về react/redux cũng như quá trình phát triển một trang web. \n\
        -Thiết kế giao diện theo từng component bằng các libary UI. \n\
        -Định hình được roadmap và các kĩ năng cũng như công nghệ mà một lập trình viên ReactJs cần có. \n\ "
    }
]
const dataEducation = [
    {
        title: "Đại học Thăng Long",
        time: "9/2019 - nay",
        des: " -Theo học tại trường đại học Thăng Long chuyên ngàng CNTT."
    },
    {
        title: "Trợ giảng môn Ngôn ngữ lập trình (C++)",
        time: "12/2020 - 3/2021",
        des: "-Phụ giảng, hướng dẫn giải bài tập cho sinh viên. \n\
        -Chấm bài, kiểm tra tiến trình học cũng như quá trình hoàn thành bài tập của sinh viên.\n\
        -Trao đổi, cố vấn cho sinh viên trong tiến trình học.\n\
        -Tham gia thiết kế bài giảng cũng như dịch các tài liệu từ tiếng anh."
    },
    {
        title: "Trợ giảng môn Lập trình hướng đối tượng (C++)",
        time: "3/2021 - 6/2021",
        des: "-Tham gia giảng dạy một số phần trong bài giảng.\n\
        -Hướng dẫn, phụ đạo hỗ trợ ngoài cho các sinh viên không theo tiến trình học."
    }
]

const Resume = () => {
    return (
        <Box className="resume">
            <Container maxWidth="lg">
                <Typography variant="h3"  className="resume-pd-100">
                    Resume
                </Typography>
                <Grid container spacing={12}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Typography variant="h5" >
                            Kinh Ngiệm
                        </Typography>
                        <TimelineResume
                            data= {[...dataExperience]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6}>
                        <Typography variant="h5" >
                            Học vấn
                        </Typography>
                        <TimelineResume 
                            data={[...dataEducation]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Resume;
