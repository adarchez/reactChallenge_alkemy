import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const {auth} = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Hotel</a>
        <button type="button" className="btn btn-outline-light m-2">{ auth ? "Logout" : "Login" }</button>
        {/* <div className="collapse navbar-collapse"> */}
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
          </ul> */}
          {/* <button type="button" className={ auth ? "btn btn-primary m-2" : "btn btn-outline-primary m-2" }>{ auth ? "Logout" : "Login" }</button> */}
          {/* <button type="button" className="btn btn-primary m-2">Logout</button> */}
        {/* </div> */}
      </div>
    </nav>
  )
}

export default Header;