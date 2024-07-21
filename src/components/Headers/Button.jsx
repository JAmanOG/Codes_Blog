import React from "react";

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} [props.type="button"] - The type of the button.
 * @param {string} [props.bgColor="bg-gray-300"] - The background color of the button.
 * @param {string} [props.textColor="text-white"] - The text color of the button.
 * @param {string} [props.className=""] - Additional CSS class names for the button.
 * @returns {JSX.Element} The rendered Button component.
 */
function Button({ children ,
    type= "button",
    bgColor = "bg-gray-300",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return <button
  className={`${bgColor},${textColor},${className} `}{...props} type={type}
  >{children}</button>;
}

export default Button;
