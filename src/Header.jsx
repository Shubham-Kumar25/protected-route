import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex items-center justify-end gap-8 px-4 py-4 bg-indigo-400 shadow-lg h-100px">
      <Link className="font-bold" to="/">
        Home
      </Link>
      <Link className="font-bold" to="/admin/dashboard">
        Dashboard
      </Link>
      <Link className="font-bold" to="/login">
        Login
      </Link>
      <Link className="font-bold" to="/profile">
        Profile
      </Link>
      <Link className="font-bold" to="/myorders">
        My Orders
      </Link>
      <Link className="font-bold" to="/myblog">
        Blogs
      </Link>
    </nav>
  );
};

export default Header;
