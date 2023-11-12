import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const Sidebar = ({ addProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Button type="button" onClick={addProject}>
          + Add Project
        </Button>
      </div>
      <ul>
        <li></li>
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  addProject: PropTypes.func.isRequired,
};

export default Sidebar;
