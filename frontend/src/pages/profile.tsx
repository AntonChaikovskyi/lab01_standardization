import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NFTCard } from "@/components/cards/nft-card.tsx";
import axios from "axios";
import { useEffect, useState } from "react";
import type { NftType } from "@/pages/nft.tsx";

export const Profile = () => {
    const [nfts, setNfts] = useState<NftType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUserNfts = async () => {
            try {
                setLoading(true);
                setError(null);

                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Please sign in");
                    setLoading(false);
                    return;
                }

                const response = await axios.get<{ data: NftType[] }>(
                    "http://localhost:3000/nft/owned",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setNfts(response.data.data);
            } catch (err) {
                console.error(err);
                setError("No NFT found");
            } finally {
                setLoading(false);
            }
        };

        getUserNfts();
    }, []);

    return (
        <div className="px-10 bg-[var(--wui-color-modal-bg-base)] w-full h-auto flex flex-col">
            <div className="flex justify-between items-center mb-10">
                <img src="/hero-1.png" alt="Hero" className="w-96" />
                <h1 className="font-[UniqueFont] text-[300px] leading-0 text-white">3 LVL</h1>
            </div>

            <Accordion type="single" collapsible className="rounded-[30px] mb-10 py-4 px-10 bg-black">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-[UniqueFont] text-9xl text-white">
                        My NFTs
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                        {loading && (
                            <p className="text-center text-lg mt-4">Loading...</p>
                        )}

                        {error && (
                            <p className="text-center text-red-500 mt-4">{error}</p>
                        )}

                        {!loading && !error && nfts.length === 0 && (
                            <p className="text-center mt-4">У вас ще немає куплених NFT.</p>
                        )}

                        {!loading && !error && nfts.length > 0 && (
                            <div className="flex flex-wrap gap-6 justify-center py-4">
                                {nfts.map((item) => (
                                    <NFTCard
                                        key={item._id}
                                        id={item._id}
                                        collection={item.collection}
                                        imgUri={item.imgUri}
                                        name={item.name}
                                        price={item.price}
                                        creator={item.creator}
                                        owner={item.owner}
                                    />
                                ))}
                            </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="rounded-[30px] mb-10 py-4 px-10 bg-black">
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-[UniqueFont] text-9xl text-white">
                        My Earnings
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                        This section displays your current earnings, including completed transactions and pending payments. Keep track of your financial progress here.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="rounded-[30px] mb-10 py-4 px-10 bg-black">
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-[UniqueFont] text-9xl text-white">
                        How to Earn?
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                        You can earn by completing tasks, referring friends, or selling your digital products. Explore all available opportunities in the dashboard.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Profile;
