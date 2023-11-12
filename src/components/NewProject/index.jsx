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
    const title_ = title.current.value;
    const description_ = description.current.value;
    const dueDate_ = dueDate.current.value;

    if (
      title_.trim() === "" ||
      description_.trim() === "" ||
      dueDate_.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({ title_, description_, dueDate_ });
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
