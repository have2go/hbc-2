"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoBlack from "/public/hbc-black.svg";
import logoWhite from "/public/hbc-white.svg";
import { useEffect, useState } from "react";

export default function Header({ setIsPopup, setPopupType }) {
    const pathname = usePathname();
    const [isWhite, setIsWhite] = useState(true);

    useEffect(() => {
        pathname === "/" ? setIsWhite(true) : setIsWhite(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`w-full h-20 shadow-md rounded-b-3xl fixed top-0 left-0 z-20 ${
                    isWhite ? "bg-white" : "bg-main-blue"
                }`}
            >
                <div className="flex custom-container h-full mx-auto items-center justify-between">
                    <Link href="/">
                        <Image src={isWhite ? logoBlack : logoWhite} alt="Highbrow Customs" className="md:w-44 lg:w-52" />
                    </Link>
                    <div className={`flex md:gap-5 lg:text-lg xl:text-xl xl:gap-10 items-center ${isWhite ? "text-black" : "text-white"}`}>
                        <Link className="" href="/services">
                            Услуги
                        </Link>
                        <Link className="" href="/about">
                            О компании
                        </Link>
                        <Link className="" href="/contacts">
                            Контакты
                        </Link>
                        <button
                            className={`px-6 py-1.5  rounded-full border border-white transition-all ${
                                isWhite
                                    ? "text-white bg-main-blue hover:text-main-blue hover:bg-white hover:border-main-blue"
                                    : "text-main-blue bg-white hover:text-white hover:bg-main-blue hover:border-white"
                            }`}
                            onClick={() => {
                                setIsPopup(true);
                                setPopupType("formQuestion");
                            }}
                        >
                            Задать вопрос
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
