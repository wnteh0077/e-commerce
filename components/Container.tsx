'use client';

const Container = ({ children } : { children: React.ReactNode}) => {
    return (
        <>
            <div className="max-w-full mx-auto xl:px-20 md:px-10 px-6">
                {children}
            </div>
        </>
    )
};

export default Container;

