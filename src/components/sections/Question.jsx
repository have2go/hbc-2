import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useMask } from "@react-input/mask";

export default function Question() {
    const form = useRef();
    const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });

    const PUBLIC_KEY = "o3u4fext32rohw6Zf";
    const TEMPLATE_ID = "template_53dooog";
    const SERVICE_ID = "service_l6aslnc";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(res => console.log(res))
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                error => {
                    console.log("FAILED...", error);
                }
            );
    };

    return (
        <form
            action=""
            className="flex flex-col items-center py-12 md:w-3/4 lg:w-2/4 mx-auto"
            onSubmit={sendEmail}
            ref={form}
            id="question"
        >
            <h4 className="xl:text-4xl md:text-3xl lg:text-4xl">Остались вопросы?</h4>
            <p className="lg:text-sm lg:pt-3 md:text-xs md:pt-2">Заполните форму и наш менеджер свяжется с Вами</p>
            <div className="grid grid-rows-3 grid-cols-[250px_1fr] gap-x-8 gap-y-4 py-6 input-container w-full max-w-[750px]">
                <label htmlFor="" className="flex flex-col col-start-1">
                    Ваше имя*
                    <input
                        type="text"
                        placeholder="Имя"
                        className="text-black"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        name="from_name"
                    />
                </label>
                <label htmlFor="" className="flex flex-col col-start-1">
                    Электронная почта*
                    <input
                        type="email"
                        placeholder="Почта"
                        className="text-black"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        name="from_email"
                    />
                </label>
                <label htmlFor="" className="flex flex-col col-start-1">
                    Ваш телефон
                    <input
                        type="text"
                        placeholder=""
                        className="text-black"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        name="from_phone"
                        ref={inputRef}
                    />
                </label>
                <label htmlFor="" className="col-start-2 row-start-1 row-end-4 flex flex-col">
                    Вопрос
                    <textarea name="message" className="resize-none h-full text-black" id=""></textarea>
                </label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" className="mb-2 hover:cursor-pointer" required></input>
                <p className="text-xs">Я согласен с политикой обработки персональных данных</p>
            </div>
            <button
                // onClick={() => setPopupType("form")}
                type="submit"
                className="text-xl px-8 mt-3 py-3 rounded-full border border-white transition-all text-white bg-main-blue hover:text-main-blue hover:bg-white hover:border-main-blue"
            >
                Отправить
            </button>
        </form>
    );
}
