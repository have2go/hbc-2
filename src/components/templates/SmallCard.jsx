export default function SmallCard({ card, onCardClick }) {
    return (
        <div
            className="rounded-3xl bg-pale flex justify-between items-center md:p-4 md:gap-3 xl:p-8 xl:gap-6 hover:bg-pale-hover transition-all cursor-pointer"
            onClick={e => onCardClick(e, card, "small")}
        >
            <h4 className="md:text-base lg:text-lg text-xl max-w-[70%]">{card.title}</h4>
            <p className="md:text-sm lg:text-base text-lg font-medium text-center">{card.price}</p>
        </div>
    );
}
