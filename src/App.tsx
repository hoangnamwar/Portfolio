import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import Footer from "./components/Footer";
import { LightMode, NightsStay } from "@mui/icons-material";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      bgColorNav: string;
      txt: string;
      colorTxtSpecial?: string;
      reverse: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    themeName?: string;
    status?: {
      bgColorNav?: string;
      txt?: string;
      colorTxtSpecial?: string;
      reverse: string;
    };
  }
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // --------- Theme ---------
  const [theme, setTheme] = useState<"light" | "dark">();
  const themeLight = createTheme({
    palette: {
      mode: "light",
      secondary: { main: "#1976d2" },
    },
    typography: {
      body1: {
        lineHeight: 2,
        letterSpacing: "0.015em",
      },
    },
    status: {
      bgColorNav: "#1976d2",
      txt: "#fff",
      colorTxtSpecial: "#1976d2",
      reverse: "#1976d2",
    },
  });
  const themeDark = createTheme({
    palette: {
      mode: "dark",
      secondary: { main: "#0a0416" },
    },
    typography: {
      body1: {
        lineHeight: 2,
        letterSpacing: "0.015em",
      },
    },
    status: {
      bgColorNav: "rgba(33,32,56,.8470588235294118)",
      txt: "#fff",
      colorTxtSpecial: "#c770f0",
      reverse: "#fff",
    },
  });

  useEffect(() => {
    if (theme) localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    console.log("inital", theme);
    let themeLocal = localStorage.getItem("theme");
    console.log("check", themeLocal, typeof themeLocal, themeLocal === "light");
    if (themeLocal && JSON.parse(themeLocal) === "light") {
      setTheme("light");
      console.log("light");
    } else {
      setTheme("dark");
      console.log("dark");
    }
  }, []);

  // ----------- ------ ------------

  // ----------- Theme 2 ------------
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme2 = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          secondary: {
            main: "#000",
            light: "#fff",
            dark: "#0a0416",
          },
        },
      }),
    [mode]
  );
  // ----------- ------ ------------

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      {/* <ThemeProvider theme={ theme2 } >  */}
      <Paper
        // className={(mode === "dark" ? "app" : undefined)}
        className={theme === "dark" ? "app" : undefined}
        sx={{ minHeight: "100vh", border: "unset", paddingBottom: "120px" }}
      >
        {load ? <Preloader /> : null}
        <BrowserRouter>
          <Navbar />
          <Box className="empty"></Box>
          <div style={{ position: "fixed", right: 0, top: "80px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (theme === "light") setTheme("dark");
                else setTheme("light");
              }}
            >
              {theme === "light" ? <LightMode /> : <NightsStay />}
            </Button>
          </div>
          <Box className="switch">
            <Switch>
              <Route path="/Portfolio" exact component={Home} />
              <Route path="/Portfolio/about" component={About} />
              <Route path="/Portfolio/project" component={Projects} />
              <Route path="/Portfolio/resume" component={Resume} />
            </Switch>
          </Box>
          <Footer />
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
