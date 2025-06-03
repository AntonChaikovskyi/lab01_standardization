import Filter from "./filter/filter.tsx";

const CollectionBanner = () => {
    return (
        <div className='flex px-10 gap-3'>
            <div className='flex-1'>
               <Filter />
            </div>
            <div className='flex-2'>
                <div className='bg-white w-full h-11' />

            </div>

        </div>
    );
};

export default CollectionBanner;