'use client';

interface InputProps {
    id: string,
    type?: string,
    label: string,
    onChange: any,
    value: string
};

const Input: React.FC<InputProps> = ( {id, type, label, onChange, value }) => {
    return (
        <>
            <div className="relative w-full">
                <input 
                    className="
                        w-full 
                        px-5
                        pt-6
                        pb-1  
                        bg-opacity-50 
                        border
                        border-zinc-400
                        rounded-md
                        outline-none
                        focus:border-black
                        focus:bg-gray-100
                        peer
                    " 
                    id={id}
                    type={type}
                    onChange={onChange}
                    placeholder=""
                />
                <label 
                    className="
                        absolute
                        left-5
                        top-1
                        text-zinc-600
                        duration-300
                        origin-[0]
                        translate-y-0
                        scale-75
                        cursor-text
                        peer-placeholder-shown:translate-y-3
                        peer-placeholder-shown:scale-100
                        peer-focus:translate-y-0    
                        peer-focus:scale-75
                    "
                    htmlFor={id}>
                    {label}
                </label>
            </div>
        </>
    )
};

export default Input;