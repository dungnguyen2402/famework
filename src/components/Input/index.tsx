import React from "react";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    prefix?: React.ReactNode,
    placehoder?: string,
};

const Input = ({ onChange, prefix, placehoder }: InputProps) => {
    return <div className="flex items-center justify-between space-x-2 border border-red-500 w-full mr-2 px-2">
        {prefix && prefix}
        <input onChange={onChange} placeholder={placehoder} className="w-full p-2 outline-none" />
    </div>;
};

export default Input;
