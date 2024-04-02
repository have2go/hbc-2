"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoBlack from "/public/hbc-black.svg";
import logoWhite from "/public/hbc-white.svg";
import { useEffect, useState } from "react";

export default function Footer() {
    return (
        <>
            <footer className={`w-full h-20 md:mt-10 xl:mt-20  shadow-md rounded-t-3xl bg-main-blue`}>
                <div className="flex custom-container h-full mx-auto items-center justify-between">
                    <Image src={logoWhite} alt="Highbrow Customs" className="md:w-52" />
                    <div className="flex flex-col lg:text-lg xl:text-xl items-center text-white">
                        <p className="">zayavka@hb-customs.ru</p>
                        <p className="">+7 (812) 600-48-49 (доб. 209)</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
