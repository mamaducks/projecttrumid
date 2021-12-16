import "./App.css";
import ProjectsPage from "./ProjectsPage";
import ProfilePage from "./ProfileCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";



function App() {
  return (
    
      <ThemeProvider theme={theme}>
        <ProfilePage />

        {/* <Projects /> */}

        <ProjectsPage />
      </ThemeProvider>
    
  );
}

export default App;
