import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Dashboard, DashboardNew } from "./components/Dashboard/Dashboard";
import { Project } from "./components/Project/Project";
import { People } from "./components/AppMenu/People";
import { Projects } from "./components/AppMenu/Projects";
import { Peeps } from "./components/AppMenu/People";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path="/profile/:profileId" element={<Profile />} />

          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/projects" element={<Projects  />} />
          <Route path="/people" element={<Peeps />} />

        <Route path="/" element={<DashboardNew />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
