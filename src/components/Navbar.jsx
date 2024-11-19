import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/auth/update-profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/auth/user-profile">User Profile</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img className="w-14 rounded-full" src={logo} alt="logo" />{" "}
            Eco-Adventure Experiences
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 text-lg">
            {links}
          </ul>
        </div>

        <div className="navbar-end relative">
          <div className="relative group pr-5">
            {/* User Image */}
            {
              user?.email ? (<img
                className="w-14 h-14 rounded-full"
                src={user?.photoURL || "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"}
                alt="User"
              />) : ""
            }

            {/* Tooltip */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-max p-2 rounded-md bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <p>{user?.displayName}</p>
              <p>{user?.email}</p>
            </div>
          </div>

          {user?.email ? (
            <button
              onClick={logOut}
              className="btn bg-red-600 text-white text-lg hover:bg-red-700 hover:text-white"
            >
              Log-out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-green-600 text-white text-lg hover:bg-green-700 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
