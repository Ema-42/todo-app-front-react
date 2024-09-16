import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Leer el estado inicial del tema desde localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-[#2560E5] dark:bg-gray-800 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <FaTasks className="h-8 w-8 mr-2" />
            <span className="font-semibold text-xl">Todo App</span>
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/todos"
                className="text-white hover:bg-[#4375ec] px-3 py-2 rounded-md text-sm font-medium"
              >
                Todos
              </Link>

              <Link
                to="/users"
                className="text-white hover:bg-[#4375ec] px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-white hover:bg-[#4375ec] px-3 py-2 rounded-md text-sm font-medium"
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#4375ec] hover:bg-white"
            >
              Log out
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#4375ec] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2560E5] focus:ring-white"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/todos"
              className="text-white hover:bg-[#4375ec] block px-3 py-2 rounded-md text-base font-medium"
            >
              Todos
            </Link>

            <Link
              to="/users"
              className="text-white hover:bg-[#4375ec] block px-3 py-2 rounded-md text-base font-medium"
            >
              Users
            </Link>
            <button
              onClick={toggleTheme}
              className="text-white hover:bg-[#4375ec] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <a
              href="#"
              className="text-white hover:bg-[#4375ec] block px-3 py-2 rounded-md text-base font-medium"
            >
              Log out
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
