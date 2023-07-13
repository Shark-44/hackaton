import pre from "../images/pre.jpeg";
import egy from "../images/egy.jpeg";
import { Link } from "react-router-dom";
import "./Adventure.css";

const Adventure = () => {
  return (
    <div>
      <div className="globAdventure">
        <Link to="/histoire">
          <img className="advimg" src={pre} alt="" />
        </Link>
        <Link to="/histoire2">
          <img className="advimg" src={egy} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Adventure;
