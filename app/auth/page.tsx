'use client';

import Image from 'next/image'; 
import Input from '@/components/auth/Input';
import OAuth from "@/components/auth/OAuth";
import { useState, useCallback } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [varient, setVarient] = useState('register');
    const toggleVarient = useCallback(() => {
        setVarient((value) => value === 'register' ? 'login' : 'register');
    }, []);
    return (
        <>
            <div className="w-full lg:pt-8">
                <div className="h-full">
                    <div className="flex justify-center items-center">
                        <div className="w-full lg:w-1/3 py-5 bg-white bg-opacity-90 lg:border border-zinc-400 radius rounded-lg">
                            <h1 className="px-8 lg:px-0 lg:pb-5 text-2xl font-semibold lg:text-center">
                                {varient === 'register' ? 'Sign Up' : 'Sign In'}
                            </h1>
                            <hr className="border-none lg:border-solid lg:border-zinc-400" />
                            <div className="w-full px-8">
                                <div className="flex justify-center items-center flex-col gap-6 mt-8">
                                    {varient === 'register' && <Input id="username" type="text" label="Username" onChange={(e: any) => setName(e.target.value)} value={name} /> }
                                    <Input id="email" type="email" label="Email Address" onChange={(e: any) => setEmail(e.target.value)} value={email} />
                                    <Input id="password" type="password" label="Password" onChange={(e: any) => setPassword(e.target.value)} value={password} />
                                </div>
                                <button  className="w-full mt-8 p-3 bg-red-600 text-white font-semibold rounded-md outline-none hover:bg-red-500">
                                    Continue
                                </button>
                                <p className="my-5 text-sm text-neutral-600">
                                    {varient === 'register' ? 'Already have an account?' : 'New to here?'}
                                    <span className="ml-1 text-black cursor-pointer hover:underline"  onClick={toggleVarient}>
                                        {varient === 'register' ? 'Sign in here.' : 'Sign up here.'}
                                    </span>
                                </p>
                                <hr />
                                <OAuth />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Auth;