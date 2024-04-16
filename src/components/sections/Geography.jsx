import Section from "../templates/Section";
import Image from "next/image";
import map from "/public/map.jpg";
import Paths from "../Paths";
import { useEffect } from "react";

export default function Geography() {
    // useEffect(() => {
    //     const tooltip = document.querySelector(".tooltip");
    //     const countries = document.querySelectorAll(".country");

    //     countries.forEach(country => {
    //         country.addEventListener("mousemove", function (e) {
    //             tooltip.innerText = this.dataset.title;
    //             tooltip.style.top = e.y + "px";
    //             tooltip.style.left = e.x + "px";
    //         });
    //     });
    // }, []);

    return (
        <>
            <Section title="География присутствия" isH1={false}>
                <div className="relative z-10">
                    <svg viewBox="0 0 3592 2005.3333" className="absolute top-0 left-0">
                        <Paths />
                    </svg>
                    <Image src={map} alt="География присутствия" />
                </div>
            </Section>
            {/* <div className="tooltip absolute top-0 left-0 p-1 bg-white rounded-lg shadow"></div> */}
        </>
    );
}
