import {HeroArm, HeroLegs} from "../../assets/icons/hero.tsx";
import Button from "../ui/button.tsx";
import {Arrow} from "../../assets/icons/icon.tsx";

const RoundedArrow = () => {
    return (
        <div className='rounded-full border-2 p-5'>
            <Arrow />
        </div>
    )
}

const MarketBanner = () => {
    return (
        <div
            className='relative min-h-96 w-full flex flex-col justify-center items-center bg-white rounded-b-full'>
            <div className='mt-32'>
                <Button additionalItem={<RoundedArrow />} className='text-5xl py-5 px-7 rounded-full gap-4'>Explore</Button>
            </div>
            <h1 className='font-[UniqueFont] text-[450px] text-[var(--w3m-accent)] m-0 leading-none'>MARKET</h1>
            <div className='relative w-full h-11'>
                <img
                    className='absolute -top-44 left-1/2 translate-x-[-50%]'
                    src='/ok-hand.png'
                    alt='ok hand'
                />
            </div>
            <div className='absolute left-10  scale-[1.5] '>
                <HeroArm/>
            </div>
            <div className='absolute top-0 right-10'>
                <HeroLegs/>
            </div>
        </div>
    );
};

export default MarketBanner;
