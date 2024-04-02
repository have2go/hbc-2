import Image from "next/image";
import bgMain from "/public/bg-main.jpg";

export default function Main() {
    return (
        <>
            <Image
                alt=""
                src={bgMain}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
                className="-z-10"
            />
            <section className="custom-container mx-auto h-screen flex justify-center items-center">
                <div className="custom-padding w-full h-2/4 flex flex-col gap-16">
                    <h1 className="text-white xl:text-7xl lg:text-6xl md:text-5xl text-xl font-bold">Ваш верный таможенный{<br />}представитель</h1>
                    <p className="text-white md:text-xl lg:text-2xl xl:text-3xl">
                        Инновационные решения в сфере{<br />}внешнеэкономической деятельности,{<br />}отвечающие
                        современным вызовам
                    </p>
                </div>
            </section>
        </>
    );
}
