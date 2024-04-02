import { useState } from "react";

export default function FormQuestion() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <form action="" className="flex flex-col items-center">
            <h4 className="text-3xl">Задайте вопрос</h4>
            <p className="text-sm py-2">С Вами свяжется наш менеджер</p>
            <div className="grid grid-rows-3 grid-cols-2 gap-x-8 gap-y-4 py-4 input-container ">
                <label htmlFor="" className="flex flex-col col-start-1">
                    Ваше имя*
                    <input
                        type="text"
                        placeholder="Имя"
                        className="text-black"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
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
                    />
                </label>
                <label htmlFor="" className="col-start-2 row-start-1 row-end-4 flex flex-col">
                    Вопрос
                    <textarea name="" className="resize-none h-full text-black" id="" ></textarea>
                </label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" className="mb-2 hover:cursor-pointer"></input>
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
