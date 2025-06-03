const PriceInput = (props:{value:number, type:string}) => {
    return (
        <div className='w-full flex bg-[#e5ecf0] rounded-[20px] justify-between py-[14px] px-[20px]'>
            <input className='font-bold font-[Bicyclette] border-none focus:outline-none focus:border-0' value={props.value}  />
            <p className='text-[#a4a7a9] font-bold font-[Bicyclette]'>{props.type}</p>
        </div>
    );
};

export default PriceInput;