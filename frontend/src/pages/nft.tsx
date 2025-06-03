import {HeroArm} from "@/assets/icons/hero.tsx";
import Button from "@/components/common/button.tsx";

export const Nft = () => {
    return (
        <div className='px-10 relative py-10 bg-[#e8ecf4]'>
            <div className='flex justify-between gap-10'>
                <img
                    src='https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w1024_r0.9975262832405689_fpx44.98_fpy48.86.jpg'
                    alt='nft' className='rounded-[20px] w-[600px] h-auto'/>
                <div className='flex flex-col w-full'>
                    <h2 className='font-[UniqueFont] text-[250px] leading-[1] mb-2'>#6361</h2>
                    <div className='flex gap-10'>
                        <div className='flex gap-2 items-center'>
                            <img
                                src='https://coin-images.coingecko.com/nft_contracts/images/566/large/genzee.jpg?1707287389'
                                alt='nft'
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />
                            <div className='flex flex-col'>
                                <p className='font-bold text-lg font-[Bicyclette] text-[var(--wui-color-fg-150)]'>Creator</p>
                                <p className='text-base font-bold font-[Bicyclette]'>Baysed
                                    Birds</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img
                                src='https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960'
                                alt='nft'
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />
                            <div className='flex flex-col'>
                                <p className='font-bold text-lg font-[Bicyclette] text-[var(--wui-color-fg-150)]'>Current
                                    Owner</p>
                                <p className='text-base font-bold font-[Bicyclette]'>Baysed
                                    Birds</p>
                            </div>
                        </div>
                    </div>


                    <div
                        className='h-full w-full flex flex-col justify-between bg-white rounded-[20px] mt-10 p-5'>
                        <div className='flex gap-2 items-center'>
                            <img
                                src='https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960'
                                alt='nft'
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                            />
                            <p className='font-bold text-xl font-[Bicyclette]'>Player$Club</p>
                        </div>

                        <div className='flex justify-between gap-3'>
                            <h2 className='font-[UniqueFont] text-[170px] leading-[1] mb-2'>21361
                                xing</h2>
                            <div className='flex flex-col gap-2'>
                                <Button className='w-full text-3xl px-28 py-4 rounded-full'>Buy
                                    now</Button>
                                <Button className='w-full text-3xl px-28 py-4 bg-transparent border border-black rounded-full'>Make
                                    offer</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='absolute right-0 top-[10%]  scale-x-[-1] '>
                <HeroArm/>
            </div>
        </div>
    );
};
