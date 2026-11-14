
export default function AuthInput({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = true,
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-neutral-800"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:border-neutral-400 focus:border-black focus:ring-2 focus:ring-neutral-200"
      />
    </div>
  );
}
