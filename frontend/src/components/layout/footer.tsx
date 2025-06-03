import FooterCard from "../cards/footer-card.tsx";
import {HandWithPlanet} from "../../assets/icons/hero.tsx";

const firstBlockItems = [
    {name: 'Rankings', link: ''},
    {name: 'Royalty NFTs', link: ''},
    {name: 'Premium Collections', link: ''},
]
const secondBlockItems = [
    {name: 'How to Earn', link: ''},
    {name: 'FAQ', link: ''},
    {name: 'Contact', link: ''},
    {name: 'Collections', link: ''},
    {name: 'Hot NFTs', link: ''},
]

const userBlockItems = [
    {name: 'Profile', link: ''},
    {name: 'My NFTs', link: ''},
    {name: 'My History', link: ''},
]

const Footer = () => {
    return (
        <div
            className="bg-[var(--color-purple)] flex flex-wrap gap-10 px-10 lg:px-36 pt-20 pb-10">
            <div className="w-[500px]">
                <FooterCard columns={[
                    {title: 'Market', items: firstBlockItems},
                    {title: 'About', items: secondBlockItems}
                ]}/>
            </div>

            <div className="w-[200px]">
                <FooterCard columns={[
                    {title: 'User', items: userBlockItems}
                ]}/>
            </div>

            <div className="flex-1 min-w-0">
                <div
                    className='relative flex justify-between flex-wrap py-14 px-12 w-auto gap-10 bg-[var(--w3m-accent)] h-auto min-h-96 rounded-[20px]'>
                    <div className='absolute right-10 -top-20'>
                        <HandWithPlanet/>
                    </div>
                    <div className='flex flex-col justify-end items-start'>
                        <h1 className='font-bold font-[Bicyclette] text-3xl'>
                            Subscribe to news
                        </h1>
                        <p className='font-[Bicyclette] '>
                            Be the first to know about new collections, earn opporunities and other news
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;