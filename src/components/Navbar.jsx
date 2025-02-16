import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>

            </div>

            <div className="space-x-3">
                <NavLink to="/"  className="hover:text-green-400">Home</NavLink>
                <NavLink to="/about" className="hover:text-green-400">About</NavLink>
                <NavLink to="/career" className="hover:text-green-400">Career</NavLink>

            </div>
            <div className="flex items-center gap-2">
                <div>
                    <img src={userIcon} alt="user" />
                </div>
                <Link to="/auth/login" className="text-white btn bg-neutral-600 rounded-none  ">Login</Link>
            </div>
            
        </div>
    );
};

export default Navbar;