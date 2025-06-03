const dummy_users = [
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
    {name: 'Beanz official', avatar: '/user-vatar.png', totalVolume: 123546, volume: 2354},
]

const RankingsBanner = () => {
    return (
        <div className='bg-white flex flex-col p-16 rounded-[100px] h-auto w-full mb-24'>
            <div className='flex justify-between'>
                <h2 className='font-[Bicyclette] text-xl text-[var(--wui-color-fg-225)]'>Name</h2>
                <div className='flex gap-10'>
                    <h2 className='font-[Bicyclette] text-xl text-[var(--wui-color-fg-225)]'>Total Volume</h2>
                    <h2 className='font-[Bicyclette] text-xl text-[var(--wui-color-fg-225)]'>Volume</h2>
                </div>
            </div>

            {dummy_users.map((user, index) => (
                <div key={index} className='flex justify-between py-2 border-t border-t-black'>
                    <div className='flex items-center gap-4'>
                        <img  src={user.avatar} alt={user.name} className='w-14 h-14 rounded-full' />
                        <p className='text-5xl font-black'>{user.name.toUpperCase()}</p>
                    </div>
                    <div className='flex gap-10'>
                        <p className='font-bold font-[Bicyclette] text-xl'>{user.totalVolume} xing</p>
                        <p className='font-bold font-[Bicyclette] text-xl'>{user.volume} xing</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RankingsBanner;