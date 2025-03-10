import { IoEnterOutline } from "react-icons/io5"

const Navbar = () => {
  const links = <div className="space-x-10 flex items-center">
    <li><button className="btn text-gray-500">SCHEDULE</button></li>
    <li><button className="btn text-gray-500">TREND</button></li>
    <li><button className="btn text-gray-500">BLOG</button></li>
  </div>
  return (
    <div className="w-11/12 mx-auto pt-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <i> <a className="text-white text-4xl">Orchid-Movie</a></i>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3 items-center">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <a className="btn bg-blue-800 text-xl font-bold text-white"><IoEnterOutline></IoEnterOutline> Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;