import React, { useState } from "react";
import StyleComps from "./components/stylecomps/index";
import EpicSpinner from "./components/stylecomps/spinners/EpicSpinner";
// import MainLayout from "./components/layouts";
// import NestedRoutes from "./components/temp/NestedRoutes";
// import TopNavBar from "./components/layouts/TopNavBar";
// import RouteConfigExample from "./routes";
import { GlobalStyles } from "./components/Themes/Global";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./components/Themes/theme";
import Toggle from "./components/Themes/Toggle";
import ThemeTest from "./components/stylecomps/ThemeTest";
// import V3Comps from "./components/stylecomps/v3/Card3";
// import FlipCard from "./components/stylecomps/v4/FlipCard";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
