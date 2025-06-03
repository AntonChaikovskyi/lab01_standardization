import {Logo, Search} from "../../assets/icons/icon.tsx";
import Button from "../common/button.tsx";
import Input from "../common/input.tsx";

const navItems = [
    {name:'Market', link: ''},
    {name:'Royalty NFT', link: ''},
    {name:'Swap', link: ''},
]

type HeaderProps = {
    onOpenDialog: () => void;
};

const Header = ({ onOpenDialog }: HeaderProps) => {

    return (
        <div className='flex justify-between items-center px-10 py-5 sticky top-0 w-full z-50 bg-[var(--wui-color-modal-bg-base)]  border-b  border-b-white '>
            <div className='flex gap-1 items-center justify-center'>
                <Logo />
                <h1 className='text-[var(--w3m-default)] font-[Bicyclette] font-black text-xl'>xXing</h1>
            </div>

            <Input placeholder='Search here' icon={  <div className="ml-2 text-[var(--wui-color-fg-150)] scale-75">
                <Search />
            </div>} />

            <ul className='flex gap-10'>
                {navItems.map(item => (
                <li key={item.name} className='flex items-center justify-center text-white font-[Bicyclette] hover:text-[var(--color-toxic)] cursor-pointer'>
                    {item.name}
                </li>
                ))}
            </ul>
            <Button onClick={onOpenDialog}>Create Account</Button>
        </div>
    );
};

export default Header;