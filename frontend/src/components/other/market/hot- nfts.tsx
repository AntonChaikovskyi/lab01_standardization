import {NFTCard} from "@/components/cards/nft-card.tsx";
import {nftItems} from "@/components/other/market/nft-list.tsx";

const HotNfts = () => {
    return (
        <div className="flex flex-wrap gap-6 justify-center mb-10">
            {nftItems.map((item) => (
                <NFTCard key={item.id} img={item.img} />
            ))}
        </div>
    );
};

export default HotNfts;