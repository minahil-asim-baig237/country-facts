import { NavLink } from "react-router-dom";
import { TbWorldSearch } from "react-icons/tb";

export const Headers = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>
                <TbWorldSearch /> KnowYourWorld
              </h1>
            </NavLink>
            {/* Hamburger button */}
           <button
  className="menu-toggle"
  onClick={() => {
    document.querySelector(".nav-links").classList.toggle("show");
  }}
>
  ☰
</button>
          </div>
          {/* Navbar components */}
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
