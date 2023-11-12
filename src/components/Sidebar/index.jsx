import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const Sidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  onSelectProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Button type="button" onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let classes =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === onSelectProjectId) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <Button
                className={classes}
                type="button"
                onClick={() => onSelectProject(project.id)}
              >
                {project.title_}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  onSelectProject: PropTypes.func,
  onSelectProjectId: PropTypes.string,
};

export default Sidebar;
