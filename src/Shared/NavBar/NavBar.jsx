import { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const NavBar = () => {
  
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

  const navMenu = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/AllClassCard">All Class</Link></li>
    <li><Link to="/teachOn">Teach On</Link></li>
    <li><Link to="/myClass">My Class</Link></li>

    <li><Link to="/contactUs">Contact Us</Link></li>

  </>


  return (
    <div className="navbar  z-10 bg-opacity-30  bg-black text-white max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
            {navMenu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EduFirst</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ? <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title=''>
                <img
                  alt='User Profile Photo'
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <Link
                to='/dashboard'
                className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                <div>Dashboard</div>
              </Link>
              <li className='mt-2'>
                <button onClick={handleLogOut} className='bg-gray-400 block text-center'>Logout</button>
              </li>
            </ul>
          </div> : <>
            <button><Link to="/signIn">SignIn</Link></button>
          </>
        }
      </div>
    </div>
  );
};

export default NavBar;