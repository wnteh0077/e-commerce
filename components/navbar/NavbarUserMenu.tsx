'use client';

import { useState, useCallback } from "react";
import { BiMenu, BiSolidUser } from "react-icons/bi";
import { useRouter } from "next/navigation";
import NavbarUserMenuItem from "./NavbarUserMenuItem";

const NavbarUserMenu = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = useCallback(() => {
        setIsOpen(value => !value);
    }, []);
    return (
        <>
            <div className="relative flex flex-row items-center gap-4">
                <div className="md:block hidden px-4 py-2 hover:bg-neutral-100 rounded-full cursor-pointer" onClick={() => { router.push('/about-us') }}>About Us</div>
                <div className="bg-white flex flxe-row gap-2 md:px-4 px-3 py-3 border border-zinc-300 hover:shadow-md rounded-full cursor-pointer" onClick={toggleIsOpen}>
                    <BiMenu size={22} />
                    <BiSolidUser className="md:block hidden" size={22} />
                </div>
                {isOpen && (
                    <div className="absolute top-16 md:top-14 left-[-1.5rem] md:right-0 w-[100vw] md:w-60 py-2 border  border-zinc-300 bg-white md:rounded-xl z-[99]">
                        <div className="flex flex-col gap-2 cursor-pointer">
                            <NavbarUserMenuItem label="Sign Up" onClick={() => { router.push('/auth'); toggleIsOpen() }} />
                            <NavbarUserMenuItem label="Log In" onClick={() => {  router.push('/auth'); toggleIsOpen() }} />
                            <hr />
                            <NavbarUserMenuItem label="Help Center" onClick={() => {  router.push('/help-center'); toggleIsOpen() }} />
                        </div>
                    </div>
                )}

            </div>

        </>
    );
};

export default NavbarUserMenu;