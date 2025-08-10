import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {getLocale, getTranslations} from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";


const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merriweather" });


export const generateMetadata = async () => {
  const t = await getTranslations('meta');
  return {
    title: t('title'),
    description: t('description'),
    keywords: [0,1,2].map(i => t(`keywords.${i}`)),
    authors: t('authors'),
    creator: t('creator'),
    publisher: t('publisher'),
    openGraph: {
      title: t('title'),
    }
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`flex flex-col min-h-screen ${merriweather.variable} ${merriweather.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar/>
            <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
