import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props)=> {

  let location  = useLocation();
  const activeLink = (link) =>{
    return location === link? 'active':"";
  }
    return (
      <nav className={`navbar navbar-expand-lg bg-warning fixed-top`} data-bs-theme="dark" >
        <div className="container-fluid">
          <Link className={"navbar-brand text-dark fw-bold"} to="/">Journal yard</Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/")}`} aria-current="page" to="/" >Home</Link></li>
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/business")}`} aria-current="page" to="/business">Business</Link></li>
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/entertainment")}`} aria-current="page" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/general")}`} aria-current="page" to="/general">General</Link></li>
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/health")}`} aria-current="page" to="/health" >Health</Link></li>
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/science")}`} aria-current="page" to="/science" >Science</Link></li>
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/sports")}`} aria-current="page" to="/sports" >Sports</Link></li>
              <li className="nav-item"><Link className={`nav-link text-dark ${activeLink("/technology")}`} aria-current="page" to="/technology" >Technology</Link></li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch ">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}
                />
                <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >
                  Light/Dark
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;
