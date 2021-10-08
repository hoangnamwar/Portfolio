import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import developer from "../assets/developer1.jpg";
import Container from "@mui/material/Container";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home = () => {

    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState('');

    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h4">
                            Xin chào, 
                        </Typography><br />
                        <Typography variant="h4">
                            tôi là 
                            <span style={{
                                color: `${theme.status.colorTxtSpecial}`,
                                fontSize: '3rem',
                                fontWeight: 600
                            }}
                            > Hoàng Nam </span>
                        </Typography><br />
                        <Typography variant="body1" >
                            Tôi là một lập trình viên 
                            <span style={{
                                color: `${theme.status.colorTxtSpecial}`,
                                fontSize: '1.25rem',
                                fontWeight: 600
                            }}
                            > Front-end </span> 
                            đầy đam mê. Tôi sử dụng thư viện 
                            <span style={{
                                color: `${theme.status.colorTxtSpecial}`,
                                fontSize: '1.25rem',
                                fontWeight: 600
                            }}
                            > Reactjs </span> 
                            cho lập trình front-end. Tôi mong muốn đc đóng góp sức mình cho công ty.
                        </Typography>
                        <Box sx={{padding: '30px 0 30px 0'}}>
                            <Link href="https://www.facebook.com/hoangnam.war/">
                                <FacebookIcon color="primary" fontSize="large"/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/vu-nam-a9b743155/">
                                <LinkedInIcon color="primary" fontSize="large"/>
                            </Link>
                            <LocalPhoneIcon color="primary" fontSize="large" 
                                onClick={() => {
                                    setOpen(!open);
                                    setData('0342557056')
                                }}
                            />
                            <EmailIcon color="primary" fontSize="large"
                                onClick={() => {
                                    setOpen(!open);
                                    setData('davidvunam@gmail.com')
                                }}/>
                            <Box 
                                sx={{
                                    display: `${open ? 'block' : 'none'}`,
                                    marginTop: '30px',
                                    padding: '10px',
                                    bgcolor: `${theme.status.reverse}`,
                                }}
                            >
                                <Typography variant="body1" color="initial"
                                sx={{
                                    color: `${(theme.palette.mode === "dark") ? '#1976d2' : '#fff'}`,
                                    fontWeight: 600
                                }}
                                >
                                    {data}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary">
                              Xem CV của tôi
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <img className="home-img" src={developer} alt="img developer" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
