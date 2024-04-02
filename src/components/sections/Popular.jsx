import Section from "../templates/Section";
import Card from "../templates/Card";
import popularServices from "@/constants/popularServices";

export default function Popular({ onCardClick }) {
    return (
        <Section title="Популярные услуги" isH1={false}>
            <div className="grid md:grid-cols-3 md:gap-3 xl:gap-6">
                {popularServices.map((card, i) => {
                    return <Card card={card} type="popular" key={i} onCardClick={onCardClick} />;
                })}
            </div>
        </Section>
    );
}
