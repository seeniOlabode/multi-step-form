import "./TextForm.css";

export default function TextForm({
  label,
  placeholder,
  value,
  onChange,
  type,
}) {
  return (
    <div className="text-form">
      <label className="text-form__label">{label}</label>
      <input
        className="text-form__input"
        type={["text", "email", "tel"].includes(type) ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
