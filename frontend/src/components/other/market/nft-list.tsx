import {NFTCard} from "@/components/cards/nft-card.tsx";
import {useEffect, useState} from "react";
import axios from "axios";


export interface nftType  {
    _id: number
    name: string
    price: number
    imgUri: string,
    owner: string,
    creator: string,
    collection: string,
}

const NftList = () => {
    const [nfts, setNfts] = useState<nftType[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const nftsReq: {
                    data: nftType[]
                } = (await axios.get(`http://localhost:3000/nft`)).data
                setNfts(nftsReq.data)
            } catch (err) {
                console.error('Failed to fetch collections:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap gap-6 justify-center mb-10">
            {loading &&
							<p>Loading...</p>
            }
            {nfts?.length > 0 &&
                nfts.map((item) => (
                    <NFTCard id={item._id} collection={item.collection}
                             imgUri={item.imgUri} name={item.name}
                             price={item.price} creator={item.creator} owner={item.owner} key={item.id}
                             size="s"/>
                ))}
        </div>
    );
};

export default NftList