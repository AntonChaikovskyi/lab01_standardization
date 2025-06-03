import {useState} from 'react';

const NftDescription = () => {
    const [currentSection, setCurrentSection] = useState<'offers' | 'statistics'>('offers')

    return (
        <div className='w-full'>
            <div className='flex gap-14'>
                <h2 className={`font-[UniqueFont] text-[120px] leading-[1] mb-2 ${currentSection === 'offers' ? 'text-black' : 'text-[var(--wui-color-fg-125)] cursor-pointer'}`}
                    onClick={() => setCurrentSection('offers')}>Offers</h2>
                <h2 className={`font-[UniqueFont] text-[120px] leading-[1] mb-2 ${currentSection === 'statistics' ? 'text-black' : 'text-[var(--wui-color-fg-125)] cursor-pointer'}`}
                    onClick={() => setCurrentSection('statistics')}>Price
                    History</h2>
            </div>
            {currentSection === 'offers' &&
							<p className='font-[Bicyclette]'>
								Every NFT contains a digital signature which makes each one
								unique. NFTs are digital assets and could be photos, videos,
								audio files, or another digital format. NFT examples include
								artwork, comic books, sports collectibles, trading cards, games
								and more.
							</p>
            }

        </div>
    );
};

export default NftDescription;