import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar  bg-black text-white font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className=" w-5 h-5 "
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <a className="hover:text-violet-700" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-violet-700" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="hover:text-violet-700" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-lg purple">
            Safa Ali
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="hover:text-violet-700" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-violet-700" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-violet-700" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn bg-violet-700 hover:bg-violet-800 "
            href="https://github.com/mohamedk98"
            target={"_blank"}
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;