import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import logo from "../../assets/images/logo.png";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center text-2xl font-bold">
            <img className="w-[100px] mr-2 rounded-full" src={logo} alt="Logo" />
            Eco Adventure
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex gap-6 text-base font-medium">
            {["/", "/profile", "/faq", "/eventWorkshops"].map((path, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-[#03823e] underline" : "text-gray-700"
                  }
                >
                  {path === "/" ? "Home" : path.replace("/", "").replace(/([A-Z])/g, " $1")}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* User Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <FaCircleUser className="w-10 h-10" />
              )}
              <span className="text-lg font-semibold">{user.displayName || "User"}</span>
              <button
                className="btn bg-[#03823e] text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink className="btn bg-[#03823e] text-white" to="/signup">
                Sign Up
              </NavLink>
              <NavLink className="btn bg-[#03823e] text-white" to="/login">
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100 border-t border-gray-300">
          <ul className="flex flex-col gap-4 p-4 text-gray-700">
            {["/", "/profile", "/faq", "/eventWorkshops"].map((path, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-[#03823e] underline" : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {path === "/" ? "Home" : path.replace("/", "").replace(/([A-Z])/g, " $1")}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-gray-300">
            {user ? (
              <div className="flex flex-col items-center gap-3">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FaCircleUser className="w-10 h-10" />
                )}
                <span className="text-lg font-semibold">{user.displayName || "User"}</span>
                <button className="btn bg-[#03823e] text-white" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <NavLink className="btn bg-[#03823e] text-white w-full text-center" to="/signup" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </NavLink>
                <NavLink className="btn bg-[#03823e] text-white w-full text-center" to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
