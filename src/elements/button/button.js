import "./button.css";

const Button = ({ name, width, type, color = "#007bff" }) => (
  <button className="btn" style={{ width: width, backgroundColor: color }} type={type}>
    {name}
  </button>
);

export default Button;
