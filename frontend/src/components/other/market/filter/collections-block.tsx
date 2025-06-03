import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion.tsx";
import {useEffect, useState} from "react";
import axios from "axios"


type collection = {
    name: string;
    imgUri: string
}

const CollectionsBlock = () => {
    const [collections, setCollections] = useState<collection[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchCollections = async () => {
            try {
                setLoading(true)
                const collectionsReq: {
                    data: collection[]
                } = (await axios.get(`http://localhost:3000/collection`)).data
                setCollections(collectionsReq.data)
            } catch (err) {
                console.error('Failed to fetch collections:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCollections();
    }, []);

    return (
        <Accordion defaultValue="item-1" type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger
                    className='font-[Bicyclette] text-base'>Collections</AccordionTrigger>
                <AccordionContent>
                    {loading &&
                    <p>Loading...</p>
                    }
                    {collections && collections.length > 0 && (
                        <div
                            className="flex flex-col gap-4 max-h-[200px] overflow-y-auto pr-2">
                            {collections.map((collection, idx) => (
                                <div key={idx}
                                     className="flex items-center justify-between">
                                    <div
                                        className="flex items-center gap-2">
                                        <img
                                            src={collection.imgUri}
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
                            Floor: {idx + Math.random() * 10} XRP
                        </span>
                                        </div>
                                    </div>
                                    <span
                                        className="text-base font-medium font-[Bicyclette] text-[var(--wui-color-fg-150)]">{Math.round((Math.random() * (5 - 1) + 1) * 10) / 10} XRP</span>
                                </div>
                            ))}
                        </div>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default CollectionsBlock;