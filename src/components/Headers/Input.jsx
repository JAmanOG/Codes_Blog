import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    placeholder,
      label,
      type = "text",
      className = "",
      ...props
    },
    ref
  ) {
    const id = useId()
  return (
    <div>
      {label && 
        <label htmlFor={id} className="inline-block text-sm font-medium">
          {label}
        </label>
      }
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className={`bg-white text-black px-3 py-2 outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
// import React, {useId} from 'react'

// const Input = React.forwardRef( function Input({
//     label,
//     type = "text",
//     className = "",
//     ...props
// }, ref){
//     const id = useId()
//     return (
//         <div className='w-full'>
//             {label && <label 
//             className='inline-block mb-1 pl-1' 
//             htmlFor={id}>
//                 {label}
//             </label>
//             }
//             <input
//             type={type}
//             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//             ref={ref}
//             {...props}
//             id={id}
//             />
//         </div>
//     )
// })

// export default Input