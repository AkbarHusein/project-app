import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const addNewProjectHandler = () =>
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject addProject={addNewProjectHandler} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected addProject={addNewProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar addProject={addNewProjectHandler} />
      {content}
    </main>
  );
}

export default App;
