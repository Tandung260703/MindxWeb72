import { useId } from "react";

function FormInput({ label, name, errorMessage, className, type }) {
  const id = useId();
  return (
    <div className={className}>
      <label className="block text-md font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="outline-none border py-2 px-4 rounded-md inline-block w-full"
        type={type || "text"}
        id={id}
        placeholder={`Nhập ${label}...`}
        name={name}
      />
      <br />
      {errorMessage && (
        <span className="text-red-500 ml-2 text-sm">{errorMessage}</span>
      )}
    </div>
  );
}

export default FormInput;
