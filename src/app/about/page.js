"use client";

import Header from "@/components/Header";
import Section from "@/components/templates/Section";
import Popup from "@/components/popups/Popup";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";

import aboutImage from "/public/about.jpg";

export default function About() {
    const [isPopup, setIsPopup] = useState(false);
    const [popupType, setPopupType] = useState("");

    return (
        <>
            <Header setIsPopup={setIsPopup} setPopupType={setPopupType} />
            <Section title="О компании" isH1={true}>
                <div className="flex flex-col rounded-3xl bg-pale ">
                    <Image src={aboutImage} alt="О компании" className="rounded-3xl" />
                    <div className="text-2xl p-12 flex flex-col gap-6">
                        <p className="">
                            <span className="text-main-blue font-bold">Highbrow Customs</span> входит в группу компаний,
                            обслуживающую внешнеэкономическую деятельность более 30 лет. Специализируемся на комплексных
                            таможенно-логистических операциях.
                        </p>
                        <p className="">
                            Оказываем полный спектр услуг в рамках ВЭД, а именно: импорт, экспорт, декларирование,
                            таможенная очистка, получение разрешительных документов (заключение НАМИ, сертификатов
                            соответствия, деклараций о соответствии, лицензий и пр.)
                        </p>
                        <p className="">
                            Свидетельство о включении в Реестр таможенных представителей № 1632 от 13.07.2023г. Получить
                            консультацию или заказать услугу Вы можете оставив заявку.
                        </p>
                    </div>
                </div>
            </Section>
            {isPopup && (
                <Popup
                    // card={popupCard}
                    setIsPopup={setIsPopup}
                    popupType={popupType}
                    setPopupType={setPopupType}
                ></Popup>
            )}
            <Footer />
        </>
    );
}
