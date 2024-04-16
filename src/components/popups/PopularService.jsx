import productGroups from "@/constants/productGruops";

export default function PopularService({ card, setPopupType }) {
    return (
        <>
            <div className="flex flex-col">
                <h3 className="text-3xl text-center font-medium">{card.title}</h3>

                <div className="flex flex-col justify-between">
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia laboriosam
                        explicabo. Sequi dolorem eaque dignissimos, ex suscipit pariatur unde, ab voluptatum
                        voluptatibus temporibus, qui placeat. Nisi eaque dolorum expedita?
                    </p>
                </div>
            </div>
            <div className="flex flex-col">
                <h4 className="text-xl">Товарные группы:</h4>
                <div className="flex gap-2 py-4 flex-wrap">
                    {productGroups.map((group, i) => {
                        return (
                            <p
                                className="px-4 py-2 text-main-blue border-2 border-main-blue rounded-3xl inline"
                                key={i}
                            >
                                {group}
                            </p>
                        );
                    })}
                </div>
                <button
                    onClick={() => setPopupType("formPopular")}
                    className="text-xl mx-auto mt-4 px-8 py-3 rounded-full border border-white transition-all text-white bg-main-blue hover:text-main-blue hover:bg-white hover:border-main-blue"
                >
                    Заказать услугу
                </button>
            </div>
        </>
    );
}
