import imp from "/public/cards/imp.jpg";
import exp from "/public/cards/exp.jpg";
import transit from "/public/cards/transit.jpg";
import logistics from "/public/cards/logistics.jpg";
import bank from "/public/cards/bank.jpg";
import ved from "/public/cards/ved.jpg";

const popularServices = [
    {
        title: "Импорт",
        description: "Краткое описание",
        src: imp,
    },
    {
        title: "Экспорт",
        description: "Краткое описание",
        src: exp,
    },
    {
        title: "Транзит",
        description: "Комплекс услуг на территории ЕАЭС и за рубежом",
        src: transit,
    },
    {
        title: "Логистика",
        description: "Краткое описание",
        src: logistics,
    },
    {
        title: "Поручительство (Банковская гарантия)",
        description: "Обеспечение уплаты таможенных платежей",
        src: bank,
    },
    {
        title: "Финансовая логистика ВЭД",
        description: "Оказание сервиса оплаты за любые товары в любые страны мира",
        src: ved,
    },
];

export default popularServices;
