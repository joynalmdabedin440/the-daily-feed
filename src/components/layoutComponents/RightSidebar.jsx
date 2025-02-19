import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";

const RightSidebar = () => {

    const { loginWithGoogle,user } = useContext(AuthContext)

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(() => {


            })
            .then(error => {
                alert(error.message);

            })
    }

    return (
        <div>
            <div>
                <h2 className="font-semibold">Login With</h2>

                <div >
                    <button disabled={user ? true : false} onClick={handleLoginWithGoogle} className="btn  btn-outline w-full my-2 hover:border-green-400 hover:text-green-400 hover:bg-white " > <FaGoogle /> Login with Google</button>
                </div>

                <button disabled={user ? true : false}className="btn btn-outline w-full hover:border-green-400 hover:text-green-400 hover:bg-white "> <FaGithub />Login with Github</button>
            </div>

            <div className="my-4">
                <h2 className="font-semibold
                my-2">Find Us On </h2>
                <div className="join join-vertical w-full *:bg-base-200">
                    <a href="https://www.facebook.com/" target="_blank" className="btn join-item btn-outline justify-start">
                        <FaFacebook color="blue" />
                        Facebook</a>

                    <a href="https://www.x.com" target="_blank" className="btn join-item btn-outline justify-start"> <FaTwitter color="skyblue" /> Twitter</a>

                    <a href="https://www.instagram.com" target="_blank" className="btn join-item btn-outline justify-start"><FaInstagram color="red" /> Instagram</a>
                </div>

            </div>

        </div >
    );
};

export default RightSidebar;