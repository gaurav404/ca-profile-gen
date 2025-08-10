import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('footer')
    return (
      <footer className="bg-gray-100 text-center p-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} {t('title')}
        </p>
      </footer>
    );
  }