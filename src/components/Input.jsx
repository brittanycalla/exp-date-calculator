const Input = ({ label, inputType, id, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className="bg-slate-100 rounded-md focus-visible:outline-emerald-500 focus:outline-emerald-500 focus-visible:bg-white focus:bg-white p-2 mb-2 pl-4"
        id={id}
        type={inputType}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
