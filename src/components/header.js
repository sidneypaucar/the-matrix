import "../App.css";

import { Link } from "react-router-dom";

const Header = () => {
  console.log("working")
  return (
    <div className ="Header">
      <Link to="/">
        <h1 className ="headerText">ESCAPE FROM REALITY</h1>
      </Link>
    </div>

  )
}

export default Header;