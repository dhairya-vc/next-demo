import { useId } from "react";
const Input = ({
  label = "",
  type = "text",
  value,
  placeholder = "",
  className = "",
  inputClassName = "",
  onChange,
}) => {
  const inputId = useId();

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={inputId} className="mb-2 font-medium text-slate-600">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`p-2 shadow ${inputClassName}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
