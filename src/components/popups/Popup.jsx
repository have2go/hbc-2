import FormPopular from "../forms/FormPopular";
import FormQuestion from "../forms/FormQuestion";
import PopularService from "./PopularService";

export default function Popup({ card, setIsPopup, popupType, setPopupType }) {

    return (
        <>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-20">
                <div
                    className="bg-black opacity-45 w-full h-full absolute top-0 left-0"
                    onClick={() => setIsPopup(false)}
                ></div>
                <div className="md:w-[600px]  max-h-[75%] bg-white rounded-3xl z-30 flex flex-col py-6 px-10 items-center">
                    {popupType === "popular" && <PopularService card={card} setPopupType={setPopupType} />}
                    {popupType === "formPopular" && <FormPopular card={card} />}
                    {popupType === "formQuestion" && <FormQuestion />}
                </div>
            </div>
        </>
    );
}
