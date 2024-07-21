import React, { useId } from "react";

const selectBtn = React.forwardRef(function selectBtn(
  { options, label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <>
          <label htmlFor={id} className="inline-block text-sm font-medium">
            {" "}
          </label>
          <select name="" id={id} ref={ref} className={`${className}`}>
            {options?.map((option) => (
              <option key={option} value={option.value}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
});

export default selectBtn;
