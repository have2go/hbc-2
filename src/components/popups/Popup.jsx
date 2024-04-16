import { useEffect, useState } from "react";
import FormPopular from "../forms/FormPopular";
import FormQuestion from "../forms/FormQuestion";
import PopularService from "./PopularService";

export default function Popup({ card, setIsPopup, popupType, setPopupType, isPopup }) {
    const [isVisible, setIsVisible] = useState("false");

    function timeout() {
        return new Promise(resolve => setTimeout(resolve, 200));
    }

    async function waitAndClose() {
        // await timeout();
        setIsVisible(!isVisible);
        await timeout();
        setIsPopup(false);
    }

    console.log(isVisible);
    useEffect(() => {
        setTimeout(() => setIsVisible(!isVisible), 200);
    }, []);
    return (
        <>
            <div
                className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-20 ${
                    isVisible ? "opacity-0" : "opacity-100"
                } transition-all duration-200`}
            >
                <div
                    className="bg-black opacity-45 w-full h-full absolute top-0 left-0"
                    onClick={() => {
                        waitAndClose();
                    }}
                ></div>
                <div className="md:w-[600px]  min-h-[55%] max-h-[75%] bg-white rounded-3xl z-30 flex flex-col py-10 px-10 items-center justify-between">
                    {popupType === "popular" && <PopularService card={card} setPopupType={setPopupType} />}
                    {popupType === "formPopular" && <FormPopular card={card} />}
                    {popupType === "formQuestion" && <FormQuestion />}
                    {popupType === "small" && <FormPopular card={card} />}
                </div>
            </div>
        </>
    );
}
