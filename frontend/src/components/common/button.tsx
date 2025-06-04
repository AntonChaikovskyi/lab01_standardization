import type {ReactNode} from "react";
import {cn} from "@/lib/utils.ts";

interface Props {
    children: ReactNode;
    className?: string;
    additionalItem?: ReactNode;
    onClick?: () => void;
}

const Button = (props:Props) => {
    return (
        <button onClick={props.onClick} className={cn("bg-[var(--color-toxic)] font-[Bicyclette] flex justify-center items-center gap-2 px-3 py-1 cursor-pointer rounded-[15px] active:translate-y-[2px] transition-transform duration-100", props.className)}>
            {props.children}
            {props.additionalItem}
        </button>

    );
};

export default Button;