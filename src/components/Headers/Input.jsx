import React, { useId } from "react";

/**
 * Input component for rendering an input field with an optional label.
 *
 * @component
 * @param {Object} props - The input component props.
 * @param {string} [props.id] - The ID of the input element.
 * @param {string} [props.label] - The label text for the input field.
 * @param {string} [props.type="text"] - The type of the input field.
 * @param {string} [props.name=""] - The name attribute of the input field.
 * @param {string} [props.placeholder=""] - The placeholder text for the input field.
 * @param {string} [props.className=""] - Additional CSS classes for the input field.
 * @param {React.Ref} ref - The ref object for the input element.
 * @returns {JSX.Element} The rendered Input component.
 */
const Input = React.forwardRef(function Input(
  {
    id = useId(),
    label,
    type = "text",
    name = "",
    placeholder = "",
    className = "",
    ...props
  },
  ref
) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="inline-block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`bg-white text-black px-3 py-2 outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;