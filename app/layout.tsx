import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const openSans = Open_Sans({
  variable: "--font-open_sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Место для получения медицинской помощи",
  description: "Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mont ${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <AuthProvider>
        <Header />
        <main className="wrapper">
          {children}
        </main>
        </AuthProvider>
      </body>
    </html>
  );
}
