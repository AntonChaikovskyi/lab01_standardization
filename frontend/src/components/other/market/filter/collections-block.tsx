import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion.tsx";


export const collections = [
    {
        name: "1 O 1 MNKs",
        floor: "0.00",
        image: "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
    },
    {
        name: "Anti-Social Media",
        floor: "15",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFFWa10ooAhEGh2xsNzaFsipp401l5Q17c9q-58kyApDuA5ZI_bWF-Y2wYFZT3Lz-et4&usqp=CAU",
    },
    {
        name: "BEAR Ultra Rare Collection",
        floor: "1000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOFNP0taYJxRhAhH1RBXDgW9juJg38ho2SOj7LQNbldkVeHMxL6V-5ydUzg1dg7LaTjw&usqp=CAU",
    },
    {
        name: "Baysed Birds",
        floor: "23",
        image: "https://coin-images.coingecko.com/nft_contracts/images/566/large/genzee.jpg?1707287389",
    },
    {
        name: "1 O 1 MNKs",
        floor: "0.00",
        image: "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
    },
    {
        name: "Anti-Social Media",
        floor: "15",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFFWa10ooAhEGh2xsNzaFsipp401l5Q17c9q-58kyApDuA5ZI_bWF-Y2wYFZT3Lz-et4&usqp=CAU",
    },
    {
        name: "BEAR Ultra Rare Collection",
        floor: "1000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOFNP0taYJxRhAhH1RBXDgW9juJg38ho2SOj7LQNbldkVeHMxL6V-5ydUzg1dg7LaTjw&usqp=CAU",
    },
    {
        name: "Baysed Birds",
        floor: "23",
        image: "https://coin-images.coingecko.com/nft_contracts/images/566/large/genzee.jpg?1707287389",
    },
    {
        name: "1 O 1 MNKs",
        floor: "0.00",
        image: "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
    },
    {
        name: "Anti-Social Media",
        floor: "15",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFFWa10ooAhEGh2xsNzaFsipp401l5Q17c9q-58kyApDuA5ZI_bWF-Y2wYFZT3Lz-et4&usqp=CAU",
    },
    {
        name: "BEAR Ultra Rare Collection",
        floor: "1000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOFNP0taYJxRhAhH1RBXDgW9juJg38ho2SOj7LQNbldkVeHMxL6V-5ydUzg1dg7LaTjw&usqp=CAU",
    },
    {
        name: "Baysed Birds",
        floor: "23",
        image: "https://coin-images.coingecko.com/nft_contracts/images/566/large/genzee.jpg?1707287389",
    },
];

const CollectionsBlock = () => {
    return (
        <Accordion defaultValue="item-1" type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger
                    className='font-[Bicyclette] text-base'>Collections</AccordionTrigger>
                <AccordionContent>
                    <div
                        className="flex flex-col gap-4 max-h-[200px] overflow-y-auto pr-2">
                        {collections.map((collection, idx) => (
                            <div key={idx}
                                 className="flex items-center justify-between">
                                <div
                                    className="flex items-center gap-2">
                                    <img
                                        src={collection.image}
                                        alt={collection.name}
                                        width={30}
                                        height={30}
                                        className="rounded-full object-cover"
                                    />
                                    <div className="flex flex-col">
                                                <span
                                                    className="text-base font-bold font-[Bicyclette]">{collection.name}</span>
                                        <span
                                            className="text-xs font-bold font-[Bicyclette] text-[var(--wui-color-fg-150)]">
              Floor: {collection.floor} XRP
            </span>
                                    </div>
                                </div>
                                <span
                                    className="text-base font-medium font-[Bicyclette] text-[var(--wui-color-fg-150)]">0.0 XRP</span>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default CollectionsBlock;