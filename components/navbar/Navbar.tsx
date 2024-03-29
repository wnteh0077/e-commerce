import Container from "../Container";
import NavbarLogo from "./NavbarLogo";
import NavbarSearch from "./NavbarSearch";
import NavbarUserMenu from "./NavbarUserMenu";

const Navbar = () => {
    return (
        <>
            <div className="sticky top-0 z-10 w-full">
                <div className="py-4 border border-zinc-300">
                    <Container>
                        <div className="flex flex-row justify-between items-center">
                            <NavbarLogo />
                            <NavbarSearch />
                            <NavbarUserMenu />
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
};

export default Navbar;