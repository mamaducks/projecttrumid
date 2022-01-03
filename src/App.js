import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AllProfiles } from "./components/Profile/AllProfiles";
import { AllProjects } from "./components/Project/AllProjects";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Profile } from "./components/Profile/Profile";
import { Project } from "./components/Project/Project";
import theme from "./theme";
import TrumidAppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TrumidAppBar />
      <Routes>
        <Route path="/profile/:profileId" element={<Profile />} />

        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/profiles" element={<AllProfiles />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
