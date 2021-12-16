import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Dashboard } from "./components/Dashboard/Dashboard";
// import ProfilePage from "./ProfileCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/profile/:profileId" element={<Profile />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>

      {/* <Projects /> */}

      {/* <ProjectsPage /> */}
    </ThemeProvider>
  );
}

export default App;
