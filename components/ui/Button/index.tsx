import { Color, Measure, Weight } from "@/components/types";
import { FC, ReactNode } from "react";
interface IButtonProps {
    size?: Measure
    color?:Color
    customClass?: string
    children:ReactNode
    textWeight?: Weight
    rounded?: Measure
};

const Button: FC<IButtonProps> = ({
    size="normal",
    color="default",
    customClass,
    children,
    textWeight="normal",
    rounded="normal"
}) => {
    let buttonSize = "h-8"
    let buttonColor = "bg-black"
    let buttonWeight = "font-normal"
    let textColor = "text-white"
    let buttonRounded = "rounded-sm"

    switch (size) {
        case "extra-small":
            buttonSize = "h-6";
            break;
        case "small":
            buttonSize = "h-8"
            break;
        case "medium":
            buttonSize = "h-10"
            break;
        case "large":
            buttonSize = "h-12"
            break;
        case "extra-large":
            buttonSize = "h-14"
            break;
        case "ultra-large":
            buttonSize = "h-16"
            break;
        default:
            buttonSize = "text-normal"
    }

    switch (color) {
        case "primary":
            buttonColor = "bg-primary"
            break;
        case "secondary":
            buttonColor = "bg-secondary"
            break;
        case "danger":
            buttonColor = "bg-danger"
            break;
        case "default":
            buttonColor = "bg-black"
            break;
        case "warning":
            buttonColor = "bg-warning"
            break;
        case "light":
            buttonColor = "bg-white"
            textColor = "text-black"
            break;
        case "dark":
            buttonColor = "bg-gray-900"
            break;
        case "gray":
            buttonColor = "bg-gray-800"
            break;
        case "muted":
            buttonColor = "bg-gray-400"
            break;
        default:
            buttonColor = "bg-black"
            break;
    }

    switch (textWeight) {
        case "bold":
            buttonWeight = "font-bold"
            break;
        case "medium":
            buttonWeight = "font-medium"
            break;
        default:
            buttonWeight = "font-normal"
            break;
    }

    switch (rounded) {
        case "extra-small":
            buttonRounded = "rounded-sm"
            break;
        case "normal":
            buttonRounded = "rounded"
            break;
        case "small":
            buttonRounded = "rounded"
            break;
        case "medium":
            buttonRounded = "rounded-md"
            break;
        case "large":
            buttonRounded = "rounded-lg"
            break;
        case "extra-large":
            buttonRounded = "rounded-xl"
            break;
        case "ultra-large":
            buttonRounded = "rounded-2xl"
            break;
        default:
            buttonRounded = "rounded-sm"
            break;
    }

    
    return (
        <button
            type="submit"
            className={`${customClass} ${buttonSize} ${buttonColor} ${buttonWeight} ${textColor} ${buttonRounded} p-2 w-full text-base`}
        >{children}
        </button>
    )
}


export default Button;