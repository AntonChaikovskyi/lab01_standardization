import { motion } from 'motion/react';
import type {nftType} from "@/components/other/market/nft-list.tsx";

interface NFTCardProps extends nftType{
    size?: 's' | 'm' | 'l';

}

export const NFTCard = ({  size = 'l', imgUri, name, price, id }: NFTCardProps) => {

    const sizeClasses = {
        s: {
            card: 'w-[250px] h-[350px]',
            imageContainer: 'w-[225px] h-[300px] border-4',
            bgImage: 'w-[200%]',
            title: 'text-base',
            subtitle: 'text-[10px]',
            timeContainer: 'text-[10px] w-[120px]',
        },
        m: {
            card: 'w-[288px] h-[390px]',
            imageContainer: 'w-[275px] h-[360px] border-[3px]',
            bgImage: 'w-[150%]',
            title: 'text-[16px]',
            subtitle: 'text-[10px]',
            timeContainer: 'text-[10px] w-[125px]',
        },
        l: {
            card: 'w-[375px] h-[475px]',
            imageContainer: 'w-[350px] h-[450px] border-4',
            bgImage: 'w-[250%]',
            title: 'text-xl',
            subtitle: 'text-[12px]',
            timeContainer: 'text-[13px] w-[160px]',
        },
    };

    return (
        <a href={`/nft?id=${id}`}>
            <motion.div
                whileHover={{ y: -20 }}
                className={`group relative ${sizeClasses[size].card} flex justify-center items-center rounded-lg border border-white/40 overflow-hidden`}
            >
                <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                    <img
                        className={`absolute -left-[12%] bottom-0 overflow-visible aspect-[2/1] ${sizeClasses[size].bgImage} translate-y-[calc(50%_-122px_+_25vw)] sm:translate-y-1/2 blur-[calc(5vw)] sm:blur-[16px] saturate-150 transform-gpu`}
                        src="/bg-compress.jpg"
                        alt="bg-gradient"
                    />
                </div>


                <div className={`relative  border-white bg-black rounded-lg ${sizeClasses[size].imageContainer}`}>
                    <div className="aspect-square border-b-4 border-white rounded-lg">
                        <img src={imgUri} alt="NFT Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-4 py-3 text-white orbitron_font">
                        <div className="flex justify-between">
                            <h2 className={`${sizeClasses[size].title} font-[Orbitron] font-bold`}>{name}</h2>
                            <h2 className={`${sizeClasses[size].title} font-[Orbitron] font-bold`}>#{Math.random().toFixed(3)}</h2>
                        </div>
                        <p className={`${sizeClasses[size].subtitle} montserrat-font opacity-75 font-[Bicyclette]`}>Collection Name © 2022</p>
                        <div className={`flex justify-between pb-2 ${sizeClasses[size].title}`}>
                            <div className="flex gap-2 items-center">
                                <img src="/ethereum.svg" alt="ethereum-icon" />
                                <p className='font-[Orbitron]'>{price}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </a>
    );
};