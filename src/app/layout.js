import "./globals.css";

export const metadata = {
    title: "Highbrow Customs",
    description: "Ваш верный таможенный представитель",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className="">{children}</body>
        </html>
    );
}
