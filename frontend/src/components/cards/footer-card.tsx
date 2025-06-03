interface Props {
    columns: {
        title: string;
        items: { name: string; link: string }[];
    }[];
}

const FooterCard = ({ columns }: Props) => {
    return (
        <div className="flex justify-between flex-wrap py-14 px-16 w-auto gap-10 bg-[var(--wui-color-modal-bg-base)] h-auto min-h-96 rounded-[20px]">
            {columns.map((column, columnIndex) => (
                <ul key={columnIndex} className="flex flex-col gap-4">
                    <li className="text-[var(--wui-color-fg-100)] font-black text-xl mb-5 font-[Bicyclette]">
                        {column.title}
                    </li>
                    {column.items.map((item) => (
                        <li key={item.name} className="text-white font-bold font-[Bicyclette]">
                            {item.name}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

export default FooterCard;
