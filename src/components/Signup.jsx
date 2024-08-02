import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import googlelogo from "../assets/google-logo.svg";

const Signup = () => {
    const { createUser, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Signed Up Successfully!!")
                navigate(from, {replace : true})
                // Handle successful sign-up (if needed)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
//Login with google 
    const handleRegister= () => {
        loginwithGoogle().then((result) => {
            const user =result.user;
            alert("Signed Up Successfully!!")
            navigate(from, {replace:true})
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Sign Up</h1>
                        </div>
                        <form onSubmit={handleSignUp} className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                                </div>
                                <div className="relative">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                                </div>
                                <p>If you already have an account, please <Link to="/login" className="text-blue-600 underline">Login</Link> here</p>
                                <div className="relative">
                                    <button type="submit" className="bg-blue-500 text-white rounded-md px-6 py-2">Sign Up</button>
                                </div>
                                {error && <p className="text-red-500">{error}</p>}
                            </div>
                        </form>

                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleRegister} className='block'><img src={googlelogo} alt="" className='w-12 h-12 inline-block' />Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
