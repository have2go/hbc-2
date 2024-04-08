import Link from "next/link";
import Section from "../templates/Section";
import { useEffect, useRef } from "react";

export default function Advantages() {
    const scrollerRef = useRef(null);
    const scrollerInnerRef = useRef(null);

    // function addAnimation() {
    //     scrollers.forEach((scroller) => {
    //       // add data-animated="true" to every `.scroller` on the page
    //       scroller.setAttribute("data-animated", true);

    //       // Make an array from the elements within `.scroller-inner`
    //       const scrollerInner = scroller.querySelector(".scroller__inner");
    //       const scrollerContent = Array.from(scrollerInner.children);

    //       // For each item in the array, clone it
    //       // add aria-hidden to it
    //       // add it into the `.scroller-inner`
    //       scrollerContent.forEach((item) => {
    //         const duplicatedItem = item.cloneNode(true);
    //         duplicatedItem.setAttribute("aria-hidden", true);
    //         scrollerInner.appendChild(duplicatedItem);
    //       });
    //     });
    //   }

    function addAnimation() {
        const scroller = scrollerRef.current;
        const scrollerInner = scrollerInnerRef.current;

        scroller.setAttribute("data-animated", true);
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    }

    useEffect(() => {
        addAnimation();
    }, []);

    return (
        <>
            <Section title="Наши преимущества" isH1={false}></Section>
            {/* <div className="flex md:gap-2 lg:gap-4 flex-col">
                <div className="flex md:gap-2 lg:gap-4 md:text-lg lg:text-xl xl:text-2xl">
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Опыт в индустрии с 1990 года
                    </p>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Конфиденциальность
                    </p>
                </div>
                <div className="flex md:gap-2 lg:gap-4 md:text-lg lg:text-xl xl:text-2xl">
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Более 100 экспертов с опытом в области ВЭД более 20 лет
                    </p>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Круглосуточная офлайн и онлайн поддержка
                    </p>
                </div>
            </div> */}
            <div className="scroller relative -z-50 md:text-lg lg:text-xl xl:text-2xl" data-speed="slow" ref={scrollerRef}>
                <ul className="tag-list scroller__inner" ref={scrollerInnerRef}>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Опыт в индустрии
                        <br />с 1990 года
                    </p>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Конфиденциальность
                    </p>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Более 100 экспертов
                        <br />с опытом в области ВЭД более 20 лет
                    </p>
                    <p className="flex bg-main-blue rounded-3xl py-8 md:px-10 lg:px-20 text-center justify-center items-center text-white">
                        Круглосуточная <br />
                        офлайн и онлайн поддержка
                    </p>
                </ul>
            </div>
            <p className="md:text-lg md:py-6 lg:text-xl xl:text-2xl py-8 custom-padding custom-container mx-auto">
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
        </>
    );
}
