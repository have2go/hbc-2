import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Highbrow Customs",
  description: "Ваш верный таможенный представитель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
