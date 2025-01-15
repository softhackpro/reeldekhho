import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../public/file_svg.png';
import useAuth from '../hooks/useAuth';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        otp: '14434',
    });
    const navigation = useNavigate();
    const { register, loading, error } = useAuth()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(
            (prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            }
        );
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        const success = await register(
            formData.full_name,
            formData.email,
            formData.password
        )

        if (success) {
            navigation('/login')
        } else {
            console.log(error);
        }

    }

    const handleClick = async () => {
    }

    return (

        <div className="px-4 py-12 flex justify-center items-center h-screen ">
            <div className="flex flex-col gap-4 justify-center p-8 rounded-xl">

                <div className="flex flex-col items-center">
                    <img src={logo} alt='logo' className='h-20 w-20 object-cover' />
                    <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:w-[600px]">
                        Create an Account
                    </h2>

                    <p className="text-base lg:w-full w-[90%] text-[#71717a] text-center">
                        Enter your detail below to create new account
                    </p>
                </div>

                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='full_name'
                        placeholder='Full Name'
                        value={formData.full_name}
                        onChange={handleInputChange}
                        className='rounded-md p-2 outline-none border border-gray-300 focus:border-indigo-500'
                    />

                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className='rounded-md p-2 outline-none border border-gray-300 focus:border-indigo-500'
                    />

                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleInputChange}
                        className='rounded-md p-2 outline-none border border-gray-300 focus:border-indigo-500'
                    />

                    <div className='flex flex-col gap-2'>
                        {
                            false ? (
                                <button
                                    type="submit"
                                    className={`p-2 rounded-md bg-slate-900 text-white font-semibold active:scale-95`
                                    }
                                    disabled={loading}
                                >
                                    Send OTP
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className={`p-2 rounded-md bg-slate-900 text-white font-semibold active:scale-95`
                                    }
                                    disabled={loading}
                                >
                                    sign up
                                </button>
                            )
                        }
                    </div>
                </form>

                <div className="flex items-center justify-center gap-2">
                    <div className="w-[20%] h-px bg-[#71717ab9]"></div>
                    <span className="text-xs text-[#71717a] capitalize">or continue with socials</span>
                    <div className="w-[20%] h-px bg-[#71717a]"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        className="p-1 rounded-md active:scale-95 border shadow-sm font-semibold"
                        onClick={handleClick}
                    >
                        Google
                    </button>

                    <p className="text-sm self-center">
                        Already have an account?
                        <Link to={'/login'} className="text-blue-600 cursor-pointer font-semibold"> log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;