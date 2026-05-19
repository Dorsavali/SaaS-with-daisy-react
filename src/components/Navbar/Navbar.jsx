const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src="/public/images/logo.svg" alt="logo" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Tools</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>pricing</a>
            </li>
          </ul>
        </div>
        <a className="font-sans text-xl pl-2 box-border font-bold">AIStack</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <a>Home</a>
            </li>
            <li>
              <a>Tools</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>pricing</a>
            </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-[#6f5ffc] text-white hover:bg-[#4f45a5]">login</a>
        <a className="btn">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
