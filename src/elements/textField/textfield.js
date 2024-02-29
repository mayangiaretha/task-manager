import "./textfield.css";

const Textfield = ({ name, type, value, onChange, placeholder, onBlur }) => (
  <input
    type={type}
    className="input"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    onBlur={onBlur}
  />
);

export default Textfield;
