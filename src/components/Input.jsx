const Input = ({ label, inputType, id, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm tracking-wide text-white" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className="p-2 pl-4 mb-2 rounded-md bg-slate-100 focus-visible:outline-[#D9FF6B] focus:outline-[#D9FF6B] focus-visible:bg-white focus:bg-white"
        id={id}
        type={inputType}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
