import {Logo} from "../../assets/icons/icon.tsx";
import Button from "../common/button.tsx";

const navItems = [
    {name:'Market', link: ''},
    {name:'Royalty NFT', link: ''},
    {name:'Swap', link: ''},
]

const Header = () => {
    return (
        <div className='flex justify-between items-center px-10 py-5 sticky top-0 w-full z-50 bg-[var(--wui-color-modal-bg-base)] border-b-white border-[1px]'>
            <div className='flex gap-1 items-center justify-center'>
                <Logo />
                <h1 className='text-[var(--w3m-default)] font-[Bicyclette] font-black text-xl'>xXing</h1>
            </div>

            input

            <ul className='flex gap-10'>
                {navItems.map(item => (
                <li key={item.name} className='flex items-center justify-center text-white font-[Bicyclette] hover:text-[var(--color-toxic)] cursor-pointer'>
                    {item.name}
                </li>
                ))}
            </ul>
            <Button>Create Account</Button>
        </div>
    );
};

export default Header;