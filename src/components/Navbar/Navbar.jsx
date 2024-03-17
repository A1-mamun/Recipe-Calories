const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="mt-4 md:mt-10">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base"
              >
                <li>
                  <a className="">Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl md:text-4xl font-extrabold text-dark">
              Recipe Calories
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg text-[#424247] px-1 text-dark-70">
              <li>
                <a className="text-color-success">Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end text-lg">
            <div className="hidden md:block ">
              <label className="input input-bordered flex items-center gap-2 rounded-full mr-2 md:mr-4 w-56 ">
                <img src="./search.png" alt="" />
                <input
                  type="text"
                  className="grow text-dark-70"
                  placeholder="Search"
                />
              </label>
            </div>
            <button className="btn btn-circle bg-green-400">
              <img src="./Frame.png" alt="" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
