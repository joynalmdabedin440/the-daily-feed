import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="mt-8 mx-auto w-11/12">
            <Navbar />
            <div className="flex justify-center items-center ">
                <Outlet />
            </div>

        </div>
    );
};

export default AuthLayout;