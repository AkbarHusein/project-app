import React from "react";
import Input from "../Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            type="button"
            aria-label="save"
          >
            Save
          </button>
        </li>
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            type="button"
            aria-label="cancel"
          >
            Cancel
          </button>
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

export default NewProject;
