import * as React from "react";
import Timeline from "@mui/lab/Timeline";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Box, useTheme } from "@mui/material";
import { width } from "@mui/system";

interface dataType {
  title: string,
  time: string,
  des: string,
}
interface props {
  data: Array<dataType>;
}

export default function TimelineResume(props: props) {

  const theme = useTheme()

  return (
    <Box >
      <Timeline sx={{marginLeft: '-100%'}}> 
        {props.data.map((item) =>
          <TimelineItem>
            <TimelineSeparator style={{ padding: 0 }}>
              <TimelineDot 
                sx={{ 
                  bgcolor: `${theme.status.bgColorNav} !important`
                }}
              />
              <TimelineConnector
                sx={{ 
                  bgcolor: `${theme.status.bgColorNav} !important`
                }}
              />
            </TimelineSeparator>
            <TimelineContent >
                <Typography variant="h6" align="center"
                sx={{
                  padding: '10px',
                  bgcolor: `${theme.status.bgColorNav}`,
                }}>
                  {item.title}
                </Typography>
              
              <Typography variant="body1" align="center"
              sx={{
                padding: '10px',
                marginBottom: '10px'
              }}>
                {item.time}
              </Typography>
              <Typography variant="body1" className="timelineResume-br"
              sx={{marginBottom: '50px !important',
              }}
              >
                {item.des}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </Box>
  );
}
