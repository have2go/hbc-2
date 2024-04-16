"use client";

import { useState } from "react";

import Section from "@/components/templates/Section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/popups/Popup";

export default function Contacts() {
    const [isPopup, setIsPopup] = useState(false);
    const [popupType, setPopupType] = useState("");

    return (
        <>
            <Header setIsPopup={setIsPopup} setPopupType={setPopupType} />
            <Section title="Контакты" isH1={true} className="">
                <div className="bg-pale w-full rounded-3xl grid grid-cols-2 gap-10 min-h-[60vh]">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A46e738554bae18d871d87b5ec4f11e2935a23e6fd0b790ec94f74776fc1ca28a&amp;source=constructor"
                        frameborder="0"
                        className="rounded-3xl w-full h-[500px]"
                    ></iframe>
                    <div className="flex flex-col py-10 items-start gap-5">
                        <p className="p-6 bg-main-blue rounded-3xl  text-white">zayavka@hb-customs.ru</p>
                        <p className="p-6 bg-main-blue rounded-3xl text-white">+7 (812) 600-48-49 (доб. 209)</p>
                    </div>
                </div>
            </Section>
            <Footer className="" />
            {isPopup && (
                <Popup
                    // card={popupCard}
                    setIsPopup={setIsPopup}
                    popupType={popupType}
                    setPopupType={setPopupType}
                    isPopup={isPopup}
                ></Popup>
            )}
        </>
    );
}
