"use client";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Advantages from "@/components/sections/Advantages";
import Main from "@/components/sections/Main";
import Popular from "@/components/sections/Popular";
import Popup from "@/components/popups/Popup";
import Question from "@/components/sections/Question";

export default function Home() {
    const [isPopup, setIsPopup] = useState(false);
    const [popupCard, setPopupCard] = useState();
    const [popupType, setPopupType] = useState("");

    const onCardClick = (e, card, type) => {
        setIsPopup(true);
        setPopupType(type);
        setPopupCard(card);
    };

    return (
        <>
            <Header setIsPopup={setIsPopup} setPopupType={setPopupType} />
            <main className="">
                <Main />
                <Popular isPopup={isPopup} setIsPopup={setIsPopup} popupCard={popupCard} onCardClick={onCardClick} />
                <Advantages />
                {isPopup && (
                    <Popup
                        card={popupCard}
                        setIsPopup={setIsPopup}
                        popupType={popupType}
                        setPopupType={setPopupType}
                    ></Popup>
                )}
                <Question />
            </main>
        </>
    );
}
