import Link from "next/link";
import Section from "../templates/Section";

export default function Advantages() {
    return (
        <Section title="Наши преимущества" isH1={false}>
            <div className="flex md:gap-2 lg:gap-4 flex-col">
                <div className="flex md:gap-2 lg:gap-4">
                    <p className="flex bg-main-blue rounded-3xl py-8 md:text-lg md:px-10 lg:text-xl lg:px-20 xl:text-2xl text-center justify-center items-center text-white">
                        Опыт в индустрии с 1990 года
                    </p>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:text-lg md:px-10 lg:text-xl lg:px-20 xl:text-2xl text-center justify-center items-center text-white">
                        Конфиденциальность
                    </p>
                </div>
                <div className="flex md:gap-2 lg:gap-4">
                    <p className="flex bg-main-blue rounded-3xl py-8 md:text-lg md:px-10 lg:text-xl lg:px-20 xl:text-2xl text-center justify-center items-center text-white">
                        Более 100 экспертов с опытом в области ВЭД более 20 лет
                    </p>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:text-lg md:px-10 lg:text-xl lg:px-20 xl:text-2xl text-center justify-center items-center text-white">
                        Круглосуточная офлайн и онлайн поддержка
                    </p>
                </div>
            </div>
            <p className="md:text-lg md:py-6 lg:text-xl xl:text-2xl py-8 custom-padding">
                Получить консультацию или заказать услугу Вы можете заполнив{" "}
                <Link href="#" className="text-main-blue underline">
                    форму
                </Link>{" "}
                или связавшись с нами через раздел{" "}
                <Link href="#" className="text-main-blue underline">
                    контакты
                </Link>
                .
            </p>
        </Section>
    );
}
