import type {ReactNode} from "react";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode
    label?: string
}

const Input = (props: InputProps) => {
    return (
        <div className='flex flex-col'>
            <p className='font-[Bicyclette] text-white'>{props.label}</p>
            <div
                className='flex justify-between items-center rounded-full px-5 py-2 gap-20  border border-[var(--wui-color-fg-150)] '>
                <input {...props}
                       className='border-none focus:outline-none focus:border-0 text-[var(--wui-color-fg-100)] text-base font-bold font-[Bicyclette]'/>
                {props.icon}
            </div>
        </div>
    );
};

export default Input;