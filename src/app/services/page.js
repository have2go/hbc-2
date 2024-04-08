"use client";

import { useState } from "react";

import Section from "@/components/templates/Section";
import Card from "@/components/templates/Card";
import categories from "@/constants/categories";
import otherServices from "@/constants/otherSevices";
import firstCatServices from "@/constants/firstCatServices";
import secondCatServices from "@/constants/secondCatServices";
import thirdCatServices from "@/constants/thirdCatServices";
import SmallCard from "@/components/templates/SmallCard";
import Header from "@/components/Header";
import Popup from "@/components/popups/Popup";
import Footer from "@/components/Footer";

export default function Services() {
    const [isPopup, setIsPopup] = useState(false);
    const [popupType, setPopupType] = useState("");
    const [currentCategory, setCurrentCategory] = useState("");

    const onCardClick = (e, card, type) => {
        if (currentCategory) {
            setCurrentCategory("");
        } else {
            card.title === "Категория 1" && setCurrentCategory("1");
            card.title === "Категория 2" && setCurrentCategory("2");
            card.title === "Категория 3" && setCurrentCategory("3");
        }
        // e.target.parentNode.parentNode.parentNode.firstChild.style.backgroundColor = ''
        // e.target.parentNode.parentNode.parentNode.firstChild.nextSibling.style.backgroundColor = ''
        // e.target.parentNode.parentNode.parentNode.lastChild.style.backgroundColor = ''
        // e.target.parentNode.parentNode.style.backgroundColor = '#CADFFF'
    };

    return (
        <>
            <Header setIsPopup={setIsPopup} setPopupType={setPopupType} />
            <Section title="Услуги" isH1={true}>
                <div className="grid grid-cols-3 md:gap-3 xl:gap-6">
                    {categories.map((card, i) => {
                        return <Card card={card} type="category" key={i} onCardClick={onCardClick} />;
                    })}
                </div>
            </Section>
            <>
                {currentCategory === "1" && (
                    <section className="custom-container mx-auto pt-14" >
                        <h2 className="custom-padding text-3xl">Категория 1</h2>
                        <div className="grid grid-cols-2 md:gap-3 xl:gap-6 py-6">
                            {firstCatServices.map((card, i) => {
                                return <SmallCard title={card.title} price={card.price} key={i} />;
                            })}
                        </div>
                    </section>
                )}
                {currentCategory === "2" && (
                    <section className="custom-container mx-auto pt-14" >
                        <h2 className="custom-padding text-3xl">Категория 2</h2>
                        <div className="grid grid-cols-2 md:gap-3 xl:gap-6 py-6">
                            {secondCatServices.map((card, i) => {
                                return <SmallCard title={card.title} price={card.price} key={i} />;
                            })}
                        </div>
                    </section>
                )}
                {currentCategory === "3" && (
                    <section className="custom-container mx-auto pt-14" >
                        <h2 className="custom-padding text-3xl">Категория 3</h2>
                        <div className="grid grid-cols-2 md:gap-3 xl:gap-6 py-6">
                            {thirdCatServices.map((card, i) => {
                                return <SmallCard title={card.title} price={card.price} key={i} />;
                            })}
                        </div>
                    </section>
                )}
            </>
            <section className="custom-container mx-auto pt-14">
                <h2 className="custom-padding text-3xl">Другие услуги</h2>
                <div className="grid grid-cols-2 md:gap-3 xl:gap-6 py-6">
                    {otherServices.map((card, i) => {
                        return <SmallCard title={card.title} price={card.price} key={i} />;
                    })}
                </div>
            </section>
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
