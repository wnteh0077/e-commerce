'use client'

import { loginWithGoogle, loginWithGithub } from "@/action/login";
import Image from "next/image";

export default function OAuth() {
    return (
        <>
            <div className="flex flex-col gap-6 mt-5">
                <button onClick={() => { loginWithGoogle() }} className="w-full relative p-3 border border-zinc-400 outline-none rounded-md text-black hover:bg-gray-100 hover:border-black">
                    <Image className="hidden lg:block absolute ml-2" src="/images/google.png" alt="Google" width={24} height={24} />
                    Continue with Google
                </button>
                <button onClick={() => { loginWithGithub() }} className="w-full relative p-3 border border-zinc-400 outline-none rounded-md text-black hover:bg-gray-100 hover:border-black">
                    <Image className="hidden lg:block absolute ml-2" src="/images/github.png" alt="Github" width={24} height={24} />
                    Continue with Github
                </button>
            </div>
        </>
    );
};