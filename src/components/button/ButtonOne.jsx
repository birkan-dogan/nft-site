import { Link } from "react-router-dom";
import "./button.css";

const Button = () => {
  return (
    <Link to="/" className="btn-action">
      Join Now
    </Link>
  );
};

export default Button;
