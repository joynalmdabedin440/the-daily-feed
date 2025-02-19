import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";


const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        userLogOut()
            .then(() => {

            })
            .catch(error => {
                alert(error.message)
            })
    }





    return (
        <div className="flex justify-between items-center">
            <div>
                {
                    user ? <div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full" src={user.photoURL || userIcon } alt="user" />
                        <h3 className="font-bold">{user?.displayName?.toUpperCase() || user.email}</h3>
                    </div> :

                        <div className="flex items-center justify-center gap-2">
                            <img src={userIcon} alt="userIcon" />
                            <span>Please Login</span>
                        </div>

                }

            </div>

            <div className="space-x-3">
                <NavLink to="/" className="hover:text-green-400">Home</NavLink>
                <NavLink to="/about" className="hover:text-green-400">About</NavLink>
                <NavLink to="/career" className="hover:text-green-400">Career</NavLink>

            </div>
            <div className="flex items-center gap-2">


                {
                    user ? <button onClick={handleLogOut} className="text-white btn bg-neutral-600 rounded-none  ">Logout</button> : <Link to="/auth/login" className="text-white btn bg-neutral-600 rounded-none  ">Login</Link>
                }

            </div>

        </div>
    );
};

export default Navbar;