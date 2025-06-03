import {useEffect, useState} from "react";
import axios from "axios";


type userType = {
    "id": string,
    "email": string,
    "username": string,
}

const RankingsBanner = () => {
    const [users, setUsers] = useState<userType[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const usersReq: {
                    data: userType[]
                } = (await axios.get(`http://localhost:3000/user`)).data
                setUsers(usersReq.data)
            } catch (err) {
                console.error('Failed to fetch collections:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-white flex flex-col p-16 rounded-[100px] h-auto w-full'>
            <div className='flex justify-between'>
                <h2 className='font-[Bicyclette] text-xl text-[var(--wui-color-fg-225)]'>Name</h2>
                <div className='flex gap-10'>
                    <h2 className='font-[Bicyclette] text-xl text-[var(--wui-color-fg-225)]'>Total Volume</h2>
                    <h2 className='font-[Bicyclette] text-xl text-[var(--wui-color-fg-225)]'>Volume</h2>
                </div>
            </div>

            {loading &&
            <p>Loading...</p>
            }

            {users && users.length > 0 && users.map((user, index) => (
                <div key={index} className='flex justify-between py-2 border-t border-t-black'>
                    <div className='flex items-center gap-4'>
                        <img  src='/user-vatar.png' alt={user.username} className='w-14 h-14 rounded-full' />
                        <p className='text-5xl font-black'>{user.username.toUpperCase()}</p>
                    </div>
                    <div className='flex gap-10'>
                        <p className='font-bold font-[Bicyclette] text-xl'>{Math.round((Math.random() * (5 - 1) + 1) * 10) / 10} xing</p>
                        <p className='font-bold font-[Bicyclette] text-xl'>{Math.round((Math.random() * (5 - 1) + 1) * 10) / 10} xing</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RankingsBanner;