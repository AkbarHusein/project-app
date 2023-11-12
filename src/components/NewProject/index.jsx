import React from "react";
import Input from "../Input";
import PropTypes from "prop-types";
import Button from "../Button";

const NewProject = ({ addProject }) => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            type="button"
            aria-label="save"
            onClick={addProject}
          >
            Save
          </Button>
        </li>
        <li>
          <Button
            className="text-stone-800 hover:text-stone-950"
            type="button"
            aria-label="cancel"
          >
            Cancel
          </Button>
        </li>
      </menu>
      <div>
        <Input label="title" id="title" type="text" />
        <Input label="description" id="description" textarea />
        <Input label="Due date" id="due-date" type="text" />
      </div>
    </div>
  );
};

NewProject.propTypes = {
  addProject: PropTypes.func.isRequired,
};

export default NewProject;
