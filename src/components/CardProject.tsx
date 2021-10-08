import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import pic1 from "../assets/TodoList.png";
import pic2 from "../assets/wallet.png";


interface props
{
  title: string,
  des: string,
  img: string,
  link: string
}


export default function CardProject(props: props) {

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // image= {require(props.img)}
          // src= {require(props.img)}
          // image= {require("../assets/exa.jpg")}
          image= { (props.img === "pic1") ? pic1 : pic2 }
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          href={props.link}
        >
          Go
        </Button>
      </CardActions>
    </Card>
  );
}
