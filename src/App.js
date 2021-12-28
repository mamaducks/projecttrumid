import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { People } from "./components/AppMenu/People";
import { Projects } from "./components/AppMenu/Projects";
import { DashboardNew } from "./components/Dashboard/Dashboard";
import { Profile } from "./components/Profile/Profile";
import { Project } from "./components/Project/Project";
import theme from "./theme";
import TrumidAppBar from "./components/Dashboard/AppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TrumidAppBar />
      <Routes>
        <Route path="/profile/:profileId" element={<Profile />} />

        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/people" element={<People />} />

        <Route path="/" element={<DashboardNew />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
