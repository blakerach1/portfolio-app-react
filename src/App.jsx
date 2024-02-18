import { useState } from "react";
import Project from "./components/PortfolioProject";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Porfolio Website",
      description: "Portfolio website built with HTML and CSS",
      image: "src/assets/hamburger-menu.gif",
      projectURL: "https://blakerach1.github.io/",
    },
    {
      title: "Python Weather App Functions",
      description: "Functions manipulating weather data",
      imageURL: "",
      projectURL: "",
    },
    {
      title: "Django News App",
      description: "Blog application built with Django",
      imageURL: "",
      projectURL: "",
    },
    {
      title: "Crowdfunding App",
      description:
        "Crowdfunding application built with Django Rest Framework & React",
      imageURL: "",
      projectURL: "",
    },
  ];

  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <Project project={project} key={project.id} index={index} />
      ))}
    </div>
  );
}

export default App;
