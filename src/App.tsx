import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, Paper } from '@mui/material';
import Footer from './components/Footer';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      bgColorNav: string,
      txt: string,
      colorTxtSpecial?: string,
      reverse: string
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    themeName?: string,
    status?: {
      bgColorNav?: string;
      txt?: string,
      colorTxtSpecial?: string,
      reverse: string

    };
  }
}

function App() {

  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

// --------- Theme ---------
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const themeLight = createTheme({
    palette: {
      mode: 'light',
      secondary:{main: '#1976d2'},
    },
    typography: {
      body1:{
        lineHeight: 2,
        letterSpacing: '0.015em',
      }
    },
    status:
    {
      bgColorNav: '#1976d2',
      txt: '#fff',
      colorTxtSpecial: '#1976d2',
      reverse: '#1976d2'
    }
  });
  const themeDark = createTheme({
    palette: {
      mode: 'dark',
      secondary:{main: '#0a0416'},

    },
    typography: {
      body1:{
        lineHeight: 2,
        letterSpacing: '0.015em',
      }
    },
    status:
    {
      bgColorNav: 'rgba(33,32,56,.8470588235294118)',
      txt: '#fff',
      colorTxtSpecial: '#c770f0',
      reverse: '#fff',
    }
  });

// ----------- Theme 2 ------------
const [mode, setMode] = React.useState<'light' | 'dark'>('light');
const colorMode = React.useMemo(
  () => ({
    toggleColorMode: () => 
    {
      setMode((prevMode) => (prevMode === 'dark' ? 'dark' : 'light'));
    },
  }), [],
);
const theme2 = React.useMemo(
  () =>
    createTheme({
      palette: 
      {
        mode,
        secondary:
        {
          main: '#000',
          light: '#fff',
          dark: '#0a0416',
        }
      },
    }),
  [mode],
);

  return (
      <ThemeProvider theme={ (theme === 'light' ? themeLight : themeDark) } >
      {/* <ThemeProvider theme={ theme2 } >  */}
        <Paper 
          // className={(mode === "dark" ? "app" : undefined)}
          className={(theme === "dark" ? "app" : undefined)}
        >
        {load ? <Preloader /> : null}
        <BrowserRouter>
          <Navbar />
          <Box className="empty">
          </Box>
          <div style={{position: 'fixed', right: 0, top: '80px'}}> 
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => {
                  if (theme === "light")
                    setTheme("dark")
                  else setTheme("light")
                }}
                // onClick={() => {
                //   if (mode === "light")
                //     setMode("dark")
                //   else setMode("light")
                // }}
              >
                {/* {mode} */}
                {theme}
            </Button>
          </div>
          <Box className="switch">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/project" component={Projects} />
              <Route path="/resume" component={Resume} /> 
            </Switch>
          </Box>
          <Footer />
        </BrowserRouter>
        </Paper>
      </ThemeProvider>

  );
}

export default App;
