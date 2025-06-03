import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { HeroArm } from "@/assets/icons/hero.tsx";
import Button from "@/components/common/button.tsx";
import NftDescription from "@/components/other/nft/nft-description.tsx";

export interface NftType {
    _id: string;
    name: string;
    price: number;
    imgUri: string;
    owner: string;
    creator: string;
    collection: string;
    createdAt: string;
    updatedAt: string;
}

export const Nft = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [nft, setNft] = useState<NftType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [buying, setBuying] = useState<boolean>(false);
    const [buyError, setBuyError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setError("404");
            return;
        }

        const fetchNft = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get<{ data: NftType }>(
                    `http://localhost:3000/nft/${id}`
                );

                setNft(response.data.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load NFT data");
            } finally {
                setLoading(false);
            }
        };

        fetchNft();
    }, [id]);

    // Функція покупки NFT
    const purchaseNft = async () => {
        if (!id) return;
        setBuyError(null);
        setSuccessMessage(null);
        setBuying(true);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setBuyError("You are not logged in. Please log in to your account.");
                setBuying(false);
                return;
            }

            const res = await axios.post(
                `http://localhost:3000/nft/${id}/purchase`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setSuccessMessage("You have successfully purchased this NFT!");


        } catch (err: any) {
            console.error(err);
            if (err.response?.data?.error) {
                setBuyError(err.response.data.error);
            } else {
                setBuyError("An error occurred during purchase. Please try again later.");
            }
        } finally {
            setBuying(false);
        }
    };

    if (loading) {
        return (
            <div className="px-10 py-10">
                <p className="text-center text-lg">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="px-10 py-10">
                <p className="text-center text-red-500">{error}</p>
            </div>
        );
    }

    if (!nft) {
        return null;
    }

    return (
        <div className="px-10 relative py-10 bg-[#e8ecf4]">
            <div className="flex justify-between gap-10">
                <img
                    src={nft.imgUri}
                    alt={nft.name}
                    className="rounded-[20px] w-[600px] h-auto"
                />

                <div className="flex flex-col w-full">
                    <h2 className="font-[UniqueFont] text-[250px] leading-[1] mb-2">
                        {nft.name}
                    </h2>

                    <div className="flex gap-10">
                        <div className="flex gap-2 items-center">
                            <img
                                src="https://coin-images.coingecko.com/nft_contracts/images/566/large/genzee.jpg?1707287389"
                                alt="creator avatar"
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <p className="font-bold text-lg font-[Bicyclette] text-[var(--wui-color-fg-150)]">
                                    Creator
                                </p>
                                <p className="text-base font-bold font-[Bicyclette]">
                                    {nft.creator}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <img
                                src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960"
                                alt="owner avatar"
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <p className="font-bold text-lg font-[Bicyclette] text-[var(--wui-color-fg-150)]">
                                    Current Owner
                                </p>
                                <p className="text-base font-bold font-[Bicyclette]">
                                    {nft.owner}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full flex flex-col justify-between bg-white rounded-[20px] mt-10 p-5">
                        <div className="flex gap-2 items-center">
                            <img
                                src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960"
                                alt="collection avatar"
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                            />
                            <div className="flex gap-1 items-center">
                                <p className="font-bold text-xl font-[Bicyclette]">
                                    {nft.collection}
                                </p>
                                <img src="/verified.png" className="w-4" />
                            </div>
                        </div>

                        <div className="flex justify-between gap-3">
                            <h2 className="font-[UniqueFont] text-[170px] leading-[1] mb-2">
                                {nft.price} ETH
                            </h2>

                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={purchaseNft}
                                    disabled={buying}
                                    className={`cursor-pointer active:translate-y-[2px] font-[Bicyclette] w-full text-3xl px-28 py-4 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white font-light transition duration-200 ease-linear ${
                                        buying ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src="/lightning-bolt-black-shape-svgrepo-com.svg"
                                            className="w-10"
                                            alt="lightning"
                                        />
                                        {buying ? "Processing..." : "Buy now"}
                                    </div>
                                </button>

                                <Button className="w-full text-3xl px-28 py-4 bg-transparent border border-black rounded-full">
                                    Make offer
                                </Button>
                            </div>
                        </div>

                        {buyError && (
                            <p className="mt-4 text-red-500 font-[Bicyclette]">{buyError}</p>
                        )}
                        {successMessage && (
                            <p className="mt-4 text-green-600 font-[Bicyclette]">
                                {successMessage}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <NftDescription />

            <div className="absolute right-0 top-[10%] scale-x-[-1]">
                <HeroArm />
            </div>
        </div>
    );
};

export default Nft;
