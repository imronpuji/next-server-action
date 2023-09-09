import { InputType } from "@/components/types";
import { FC } from "react";
interface InputProps {
    label?: string;
    name?: string;
    type: InputType
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    isRequired?: boolean;
};

const Input: FC<InputProps> = ({
    label,
    name,
    type,
    value,
    onChange,
    placeholder,
    isRequired
}) => {
    return (
        <div className="flex flex-col gap-2">
            {
                label && <label htmlFor={name}>{label}</label>
            }
            <input
                required={isRequired}
                type={type}
                name={name}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e)}  
                placeholder={placeholder}
                className="w-full p-2 border border-gray-300 rounded-md outline-primary "
            />
       </div>
    );
}


export default Input;