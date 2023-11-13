import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const startProjectHandler = () =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));

  const cancelHandler = () =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));

  const addProjectHandler = (project) => {
    const projectId = Math.random().toString();
    const newProject = {
      ...project,
      id: projectId,
    };

    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  const deleteProjectHandler = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  const selectProjectHandler = (id) =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={deleteProjectHandler}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={addProjectHandler} onCancel={cancelHandler} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={startProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={startProjectHandler}
        projects={projectState.projects}
        onSelectProject={selectProjectHandler}
      />
      {content}
    </main>
  );
}

export default App;
