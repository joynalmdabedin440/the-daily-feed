import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";


const Register = () => {
    const [showed, setShowed] = useState(false)


    const handleRegister = e => {
        e.preventDefault()

        const name = e.target.name.value
        const photo = e.target.profile.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password);

    }
    return (
        <div className="flex flex-col md:max-w-md lg:w-lg p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Create Account</h1>
                <p className="text-sm text-gray-600">Create a New Account for better experience</p>
            </div>
            <form onSubmit={handleRegister} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="Name" className="block mb-2 text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="Profile" className="block mb-2 text-sm">Photo Url</label>
                        <input type="text" name="profile" id="profile" placeholder="Enter your profile pic url" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <input type={showed ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />

                            <div onClick={() => setShowed(!showed)} className="absolute top-1/3 right-3 cursor-pointer">
                                {
                                    showed ? <FaEyeSlash /> : <FaEye />
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-neutral-700 text-gray-50 cursor-pointer transition hover:bg-neutral-900">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Already have an account ?
                        <Link to="/auth/login" rel="noopener noreferrer" className="hover:underline text-red-600">Sign In</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;