"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Section from "@/components/templates/Section";
import categories from "@/constants/categories";
import Header from "@/components/Header";
import Popup from "@/components/popups/Popup";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ServicesLayout({ children }) {
    const pathname = usePathname();
    const [isPopup, setIsPopup] = useState(false);
    const [popupType, setPopupType] = useState("");

    return (
        <html lang="ru">
            <body className="">
                <Header setIsPopup={setIsPopup} setPopupType={setPopupType} />
                <Section title="Услуги" isH1={true}>
                    <div className="grid grid-cols-3 md:gap-3 xl:gap-6">
                        {categories.map((card, i) => {
                            return (
                                <Link
                                    className={`flex flex-col  rounded-3xl hover:bg-pale-hover transition-all cursor-pointer ${
                                        pathname === `/services/category-${i + 1}` ? "bg-pale-hover" : "bg-pale"
                                    }`}
                                    href={`/services/category-${i + 1}`}
                                    key={i}
                                    prefetch={true}
                                >
                                    <Image src={card.src} alt={card.title} className="rounded-3xl" />
                                    <div className="md:px-2 md:pt-2 md:pb-4 md:gap-1 lg:px-4 lg:py-4 xl:px-6 xl:py-4 xl:gap-2 flex flex-col">
                                        <h3 className="md:text-lg lg:text-xl xl:text-2xl">{card.title}</h3>
                                        <p className="md:text-xs lg:text-sm xl:text-base">{card.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Section>
                <section className="custom-container mx-auto pt-14">
                    <h2 className="custom-padding text-3xl">
                        {pathname === "/services" && "Другие услуги"}
                        {pathname === "/services/category-1" && "Категория 1"}
                        {pathname === "/services/category-2" && "Категория 2"}
                        {pathname === "/services/category-3" && "Категория 3"}
                    </h2>
                    <div className="grid grid-cols-2 md:gap-3 xl:gap-6 py-6">{children}</div>
                </section>
                <Footer />
            </body>
            {isPopup && (
                <Popup
                    // card={popupCard}
                    setIsPopup={setIsPopup}
                    popupType={popupType}
                    setPopupType={setPopupType}
                    isPopup={isPopup}
                ></Popup>
            )}
        </html>
    );
}
