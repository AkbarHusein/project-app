import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const classes =
    'className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={{ ...props }["id"]}
      >
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} ref={ref} />
      ) : (
        <input className={classes} {...props} ref={ref} />
      )}
    </p>
  );
});
Input.propTypes = {
  textarea: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Input;
