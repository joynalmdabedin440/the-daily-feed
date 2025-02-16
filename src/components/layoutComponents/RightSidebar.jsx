import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div>
            <div>
                <h2 className="font-semibold">Login With</h2>

                <button className="btn  btn-outline w-full my-2 hover:border-green-400 hover:text-green-400 hover:bg-white" > <FaGoogle /> Login with Google</button>

                <button className="btn btn-outline w-full hover:border-green-400 hover:text-green-400 hover:bg-white "> <FaGithub />Login with Github</button>
            </div>

            <div className="my-4">
                <h2 className="font-semibold
                my-2">Find Us On </h2>
                <div className="join join-vertical w-full *:bg-base-200">
                    <button className="btn join-item btn-outline justify-start">
                        <FaFacebook color="blue"/>
                        Facebook</button>
                    
                    <button className="btn join-item btn-outline justify-start"> <FaTwitter color="skyblue"/> Twitter</button>

                    <button className="btn join-item btn-outline justify-start"><FaInstagram color="red"/> Instagram</button>
                </div>

            </div>

        </div>
    );
};

export default RightSidebar;