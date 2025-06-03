import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const Profile = () => {
    return (
        <div
            className='px-10 bg-[var(--wui-color-modal-bg-base)] w-full h-auto justify-center flex flex-col'>
            <div className='flex justify-between items-center'>
                <img src='/hero-1.png' alt='' className='w-96'/>
                <h1 className='font-[UniqueFont] text-[300px] leading-0 text-white'>3
                    LVL</h1>
            </div>
            <Accordion type="single" collapsible className="rounded-[30px] mb-10 py-4 px-10 bg-black">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-[UniqueFont] text-9xl text-white">
                        My NFTs
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                        This is your collections section.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>



            <Accordion type="single" collapsible className="rounded-[30px] mb-10 py-4 px-10 bg-black">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-[UniqueFont] text-9xl text-white">
                        My Earnings
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                        This is your collections section.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="rounded-[30px] mb-10 py-4 px-10 bg-black">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-[UniqueFont] text-9xl text-white">
                        How to Earn?
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                        This is your collections section.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </div>
    );
};
