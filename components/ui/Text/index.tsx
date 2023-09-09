import { Color, Measure, Weight, Align } from "@/components/types";
import { FC, ReactNode } from "react";
interface ITextProps {
    size?: Measure
    color?:Color
    weight?: Weight
    customClass?: string
    type?: "title" | "heading" | "body"
    leading?: Measure
    children:ReactNode
    align?: Align
};

const Text: FC<ITextProps> = ({
    size="normal",
    color="default",
    weight="normal",
    customClass,
    type="body",
    leading="normal",
    children,
    align="left"
}) => {
    let textSize = "text-xs"
    let textColor = "text-black"
    let textWeight = "font-normal"
    let textLeading = "leading-2"
    let textAlign = "text-left"

    switch (size) {
        case "extra-small":
            textSize = "text-xs";
            break;
        case "small":
            textSize = "text-sm"
            break;
        case "medium":
            textSize = "text-base"
            break;
        case "large":
            textSize = "text-lg"
            break;
        case "extra-large":
            textSize = "text-xl"
            break;
        case "ultra-large":
            textSize = "text-4xl"
            break;
        default:
            textSize = "text-normal"
    }

    switch (color) {
        case "primary":
            textColor = "text-primary"
            break;
        case "secondary":
            textColor = "text-secondary"
            break;
        case "danger":
            textColor = "text-danger"
            break;
        case "default":
            textColor = "text-black"
            break;
        case "warning":
            textColor = "text-warning"
            break;
        case "light":
            textColor = "text-white"
            break;
        case "dark":
            textColor = "text-gray-900"
            break;
        case "gray":
            textColor = "text-gray-800"
            break;
        case "muted":
            textColor = "text-gray-400"
            break;
        default:
            textColor = "text-black"
    }

    switch (weight) {
        case "bold":
            textWeight = "font-bold"
            break;
        case "medium":
            textWeight = "font-medium"
            break;
        default:
            textWeight = "font-normal"
            break;
    }

    switch(leading){
        case "extra-small":
            textLeading = "leading-4"
            break;
        case "small":
            textLeading = "leading-6"
            break;
        case "medium":
            textLeading = "leading-8"
            break;
        case "large":
            textLeading = "leading-10"
            break;
        case "extra-large":
            textLeading = "leading-12"
            break;
        case "ultra-large":
            textLeading = "leading-14"
            break;
        default:
            textLeading = "leading-2"
            break;
    }

    switch(align){
        case "right":
            textAlign = "text-right"
            break;
        case "center":
            textAlign = "text-center"
            break;
        case "justify":
            textAlign = "text-justify"
            break;
        default:
            textAlign = "text-left"
            break;
    }

    switch (type) {
        case "title":
            return <h1
            className={`${textColor} ${textWeight} ${customClass} ${textLeading} ${textSize} ${textAlign}`}
            >{children}</h1>
            
        case "heading":
            return <h2
            className={
                `${textColor} ${textWeight} ${customClass} ${textLeading} ${textSize} ${textAlign}`
            }
            >{children}</h2>
        default:
            return <p
            className={
                `${textColor} ${textWeight} ${textSize} ${customClass} ${textLeading} ${textAlign}`
            }
            >{children}</p>
    }
}


export default Text;