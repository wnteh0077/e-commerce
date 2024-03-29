'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarLogo = () => {
    const router = useRouter();
    return (
        <>
            <Image
                className="hidden md:block cursor-pointer"
                src="/images/tarumt-logo.png"
                alt="Logo"
                width={150}
                height={43}
                onClick={() => {router.push('/')}}
            />
        </>
    );
};

export default NavbarLogo;