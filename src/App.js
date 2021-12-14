import logo from "./logo.svg";
import "./App.css";
import Projects from "./ProjectsAccordion";
import ProjectsPage from "./ProjectsPage";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <div className="App">
      <ProfilePage />

      <Projects />

      <ProjectsPage />
    </div>
  );
}

export default App;
