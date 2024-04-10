import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useMask } from "@react-input/mask";

export default function FormPopular({ card }) {
    const form = useRef();
    const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });

    const PUBLIC_KEY = "o3u4fext32rohw6Zf";
    const TEMPLATE_ID = "template_53dooog";
    const SERVICE_ID = "service_l6aslnc";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState(card.title);
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

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
        <form className="flex flex-col items-center" onSubmit={sendEmail} ref={form}>
            <input type="text" className="hidden" value="Популярные услуги" name="from_section" readOnly />
            <h4 className="text-3xl">Заказать услугу</h4>
            <p className="text-sm py-2">С Вами свяжется наш менеджер</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-4 input-container">
                <label htmlFor="" className="flex flex-col">
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
                <label htmlFor="" className="flex flex-col">
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
                <label htmlFor="" className="flex flex-col">
                    Услуга
                    <input
                        type="text"
                        placeholder=""
                        className="text-black"
                        value={service}
                        onChange={e => setService(e.target.value)}
                        name="from_service"
                    />
                </label>
                <label htmlFor="" className="flex flex-col">
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
                <label htmlFor="" className="col-start-1 col-end-3 flex flex-col">
                    Дополнительная информация
                    <textarea
                        name="message"
                        className="max-h-24 resize-none text-black"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder=""
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                </label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" className="mb-4 hover:cursor-pointer"></input>
                <p className="text-xs">Я согласен с политикой обработки персональных данных</p>
            </div>
            <button
                // onClick={() => setPopupType("form")}
                type="submit"
                className="text-xl px-8 py-3 rounded-full border border-white transition-all text-white bg-main-blue hover:text-main-blue hover:bg-white hover:border-main-blue"
            >
                Отправить
            </button>
        </form>
    );
}
