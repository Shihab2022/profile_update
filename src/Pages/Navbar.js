import React from "react";
import { Link } from "react-router-dom";
const menu = [
  { name: "Home", href: "/", id: "293oc02c" },
  { name: "About", href: "/default", id: "2aod030vkd" },
  { name: "Service", href: "/default", id: "8aod030vk" },
  { name: "Contact", href: "/default", id: "8aod0123565" },
];

const Navbar = () => {


  return (
    <nav className="bg-white  sm:px-4 py-2.5  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container md:px-20 px-2  flex flex-wrap justify-between items-center mx-auto">
        <p className="text-xl">
          <span className="text-2xl font-serif font-semibold">T</span>ask
        </p>
          <Link to="/login" className="flex md:order-2 ">
            Login
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
       
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menu.map((d) => (
              <>
                <li key={d.id} className="hover:text-blue-900 text-sm">
                  <Link to={d.href}>{d.name}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
