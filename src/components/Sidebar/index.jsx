import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const Sidebar = ({ onStartAddProject, projects }) => {
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
        {projects.map((project) => (
          <li key={project.id}>
            <Button
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
              type="button"
            >
              {project.title}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
};

export default Sidebar;
