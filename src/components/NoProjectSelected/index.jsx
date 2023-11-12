import React from "react";
import noProject from "../../assets/no-projects.png";
import Button from "../Button";

const NoProjectSelected = () => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProject}
        alt="there are no project"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected!
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started a new project!
      </p>
      <p className="mt-8">
        <Button type="button">Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
