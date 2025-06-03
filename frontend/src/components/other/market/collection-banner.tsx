import Filter from "./filter/filter.tsx";
import NftList from "@/components/other/market/nft-list.tsx";

const CollectionBanner = () => {
    return (
        <div className='flex px-10 gap-3'>
            <div className='flex-1'>
               <Filter />
            </div>
            <div className='flex-2'>
                <NftList />
            </div>

        </div>
    );
};

export default CollectionBanner;