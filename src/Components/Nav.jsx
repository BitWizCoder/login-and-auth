import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiTwotoneMail,
  AiFillGoogleCircle,
  AiOutlineGithub,
} from "react-icons/ai";

const Nav = () => {
  return (
    <div>
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-34 min-h-full bg-base-200 text-base-content gap-1">
            {/* Sidebar content here */}
            <li>
              <NavLink to={"/"}>
                <AiFillHome className="text-lg" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/email"}>
                <AiTwotoneMail className="text-lg" /> Email
              </NavLink>
            </li>
            <li>
              <NavLink to={"/google"}>
                {" "}
                <AiFillGoogleCircle className="text-lg" /> Google
              </NavLink>
            </li>
            <li>
              <NavLink to={"/github"}>
                <AiOutlineGithub className="text-lg" /> Github
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
