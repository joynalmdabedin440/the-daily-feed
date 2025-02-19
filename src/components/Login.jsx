import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";


const Login = () => {
     
    const navigate = useNavigate()
    const {loginUser}= useContext(AuthContext)

    const [showed, setShowed] = useState(false)
    
    const [error,setError]=useState(null)


    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        setError(null)

        loginUser(email, password)
            .then(() => {
                navigate('/')
            
            })
            .catch(error => {
                setError(error.message)
            })
        
        
        e.target.reset()

        

    }
    return (
        <div className="flex flex-col md:max-w-md lg:w-lg p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-12">
                <div className="space-y-4">
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
                            <input type={showed?"text":"password"} name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />

                            <div onClick={()=>setShowed(!showed) } className="absolute top-1/3 right-3 cursor-pointer">
                                {
                                    showed? <FaEyeSlash/> : <FaEye/>
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-neutral-700 text-gray-50 cursor-pointer transition hover:bg-neutral-900">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Don&lsquo;t have an account yet?
                        <Link to="/auth/register" rel="noopener noreferrer" className="hover:underline text-red-600">Sign up</Link>.
                    </p>
                </div>
            </form>
            {
                error ? <p className="text-red-500">{error }</p>:""
            }
        </div>
    );
};

export default Login;