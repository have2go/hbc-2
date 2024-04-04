import Image from "next/image";

export default function Card({ card, onCardClick, type }) {
    return (
        <div
            className={`flex flex-col bg-pale rounded-3xl hover:bg-pale-hover transition-all cursor-pointer`}
            onClick={(e) => {
                onCardClick(e, card, type);
            }}
        >
            <Image src={card.src} alt={card.title} className="rounded-3xl" />
            <div className="md:px-2 md:pt-2 md:pb-4 md:gap-1 lg:px-4 lg:py-4 xl:px-6 xl:py-4 xl:gap-2 flex flex-col">
                <h3 className="md:text-lg lg:text-xl xl:text-2xl">{card.title}</h3>
                <p className="md:text-xs lg:text-sm xl:text-base">{card.description}</p>
            </div>
        </div>
    );
}
