import React, { useRef } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveHandler = () => {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    onAdd(project);
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            type="button"
            aria-label="save"
            onClick={saveHandler}
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
        <Input label="title" id="title" type="text" ref={title} />
        <Input
          label="description"
          id="description"
          textarea
          ref={description}
        />
        <Input label="Due date" id="due-date" type="date" ref={dueDate} />
      </div>
    </div>
  );
};

NewProject.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NewProject;
