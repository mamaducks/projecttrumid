import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Project } from "./components/Project/Project";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path="/profile/:profileId" element={<Profile />} />

          <Route path="/project/:projectId" element={<Project />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
