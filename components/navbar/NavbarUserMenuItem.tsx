'use client';

interface NavBarUserMenuItemProps {
    label: string,
    onClick: () => void,
};

const NavbarUserMenuItem: React.FC<NavBarUserMenuItemProps> = ({ label, onClick }) => {
    return (
        <>
            <div className="
                w-full
                px-4
                py-3
                text-sm
                hover:bg-neutral-100 
            "
                onClick={onClick}
            >
                {label}
            </div>
        </>
    );
};

export default NavbarUserMenuItem;