import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

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

  let content;

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
      />
      {content}
    </main>
  );
}

export default App;
