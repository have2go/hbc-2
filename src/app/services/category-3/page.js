"use client";

import { useState } from "react";

import thirdCatServices from "@/constants/thirdCatServices";
import SmallCard from "@/components/templates/SmallCard";
import Popup from "@/components/popups/Popup";

export default function Services() {
    const [isPopup, setIsPopup] = useState(false);
    const [popupType, setPopupType] = useState("");
    const [popupCard, setPopupCard] = useState();

    const onCardClick = (e, card, type) => {
        setIsPopup(true);
        setPopupType(type);
        setPopupCard(card);
    };

    return (
        <>
            {thirdCatServices.map((card, i) => {
                return <SmallCard card={card} key={i} onCardClick={onCardClick} />;
            })}
            {isPopup && (
                <Popup
                    card={popupCard}
                    setIsPopup={setIsPopup}
                    popupType={popupType}
                    setPopupType={setPopupType}
                    isPopup={isPopup}
                ></Popup>
            )}
        </>
    );
}
