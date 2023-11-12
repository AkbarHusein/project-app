import React, { useRef } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";
import Modal from "../Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveHandler = () => {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dueDateValue = dueDate.current.value;

    if (
      titleValue.trim() === "" ||
      descriptionValue.trim() === "" ||
      dueDateValue.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd(project);
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please enter a valid title, description, and due date (non-empty
          values).
        </p>
      </Modal>

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
              onClick={onCancel}
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
    </>
  );
};

NewProject.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default NewProject;
