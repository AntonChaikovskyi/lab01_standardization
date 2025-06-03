import {useState} from "react";
import Button from "../components/common/button.tsx";
import RankingsBanner from "../components/other/market/rankings-banner.tsx";
import CollectionBanner from "../components/other/market/collection-banner.tsx";
import HotNfts from "@/components/other/market/hot- nfts.tsx";

export const Market = () => {
    const [selectedSection, setSelectedSection] = useState<'rankings' | 'collections' | 'hot'>('rankings')
    const buttonStyle = `w-36 py-3 rounded-full`
    const buttonBorderStyle = `text-white bg-transparent border-2 border-white`
    return (
        <>
        <div
            className='relative w-full min-h-[450px] h-auto  bg-[var(--wui-color-modal-bg-base)]'>
            <div className='flex justify-between'>

                <div className='px-10 pt-10 flex flex-col'>
                    <h1 className={`font-[UniqueFont] text-[200px] ${selectedSection === 'rankings' ? 'text-[var(--color-purple)]' : selectedSection === 'collections' ? 'text-[var(--color-toxic)]' : 'text-[var(--color-orange)]'} m-0 leading-none`}>{selectedSection === 'hot' ? 'HOT NFT' : selectedSection.toUpperCase()}</h1>
                    <div className='flex  gap-3'>
                        <Button onClick={() => setSelectedSection('rankings')}
                                className={`${buttonStyle} ${selectedSection === 'rankings' ? 'text-black bg-[var(--color-purple)]' : buttonBorderStyle}`}>Rankings</Button>
                        <Button
                            onClick={() => setSelectedSection('collections')}
                            className={`${buttonStyle} ${selectedSection === 'collections' ? 'text-black bg-[var(--color-toxic)]' : buttonBorderStyle}`}>Collections</Button>
                        <Button onClick={() => setSelectedSection('hot')}
                                className={`${buttonStyle} ${selectedSection === 'hot' ? 'text-black bg-[var(--color-orange)]' : buttonBorderStyle}`}>Hot
                            NFTs</Button>
                    </div>
                </div>

                <img
                    className={`${selectedSection == 'collections' ? 'w-52' : 'w-96'} h-auto mt-24 mr-[20%]`}
                    src={selectedSection === 'rankings' ? '/hero-4.png' : selectedSection === 'collections' ? '/hero-3.png' : '/hero-2.webp'}
                    alt='collection hero'/>
            </div>

            {selectedSection === 'rankings' &&
							<RankingsBanner/>
            }
            {selectedSection === 'collections' &&
			        <CollectionBanner />
            }
            {selectedSection === 'hot' &&
              <>
	              <div className='w-full h-[1px] mb-4 bg-white'/>
			        <HotNfts />
              </>
            }


            <div
                className='h-20 w-full rounded-full absolute -bottom-10 bg-[var(--wui-color-modal-bg-base)]'/>
        </div>
  </>
    );
};