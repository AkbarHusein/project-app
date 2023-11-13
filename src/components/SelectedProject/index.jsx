import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const SelectedProject = ({ project, onDelete }) => {
  const formattedDate = new Date(project.dueDate_).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title_}
          </h1>
          <Button
            className="text-stone-600 hover:text-stone-950"
            type="button"
            onClick={onDelete}
          >
            Detele
          </Button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description_}
        </p>
      </header>
      TASK
    </div>
  );
};

SelectedProject.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func,
};

export default SelectedProject;
