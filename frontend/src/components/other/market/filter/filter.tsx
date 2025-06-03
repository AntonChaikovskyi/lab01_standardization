import Input from "../../../common/input.tsx";
import {Search} from "@/assets/icons/icon.tsx";
import CollectionsBlock
    from "@/components/other/market/filter/collections-block.tsx";
import PriceInput from "@/components/ui/price-input.tsx";


const Filter = () => {
    return (
        <div className='flex flex-col gap-3 mb-10'>
            <Input placeholder='Search here' icon={<div
                className="ml-2 text-[var(--wui-color-fg-150)] scale-75">
                <Search/>
            </div>}/>
            <div
                className='w-full h-auto bg-white py-4 px-6 flex flex-col gap-3 rounded-[20px]'>
                <CollectionsBlock />
            </div>

            <div
                className='w-full h-auto bg-white py-4 px-6 flex gap-3 rounded-[20px]'>
                <PriceInput value={0} type='Min' />
                <PriceInput value={100} type='Max' />
            </div>
        </div>
    );
};

export default Filter;