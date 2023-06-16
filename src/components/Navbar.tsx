import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  
  return (
    <nav
      className="sticky top-0 w-full px-10 h-10 bg-blue-500 flex flex-row justify-between items-center
        text-white font-bold
        "
    >
      <div>LOGO</div>
      <div className="w-1/2">
        <ul className="flex flex-row justify-evenly">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
            <NavLink to={"/user"}>User</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p>Hello Zustand</p>
      </div>
    </nav>
  );
};

export default Navbar;
