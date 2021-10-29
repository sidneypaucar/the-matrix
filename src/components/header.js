import "../App.css";

import { Link } from "react-router-dom";

const Header = ({showText}) => {
  return (
    <div className ="Header">
      <Link to="/">
        <h1 className="headerText" onClick={showText}>ESCAPE FROM REALITY</h1>
      </Link>
    </div>

  )
}

export default Header;