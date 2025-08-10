import Link from 'next/link';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <div className="flex gap-4">
        <Link href={`/`}>{t('nav.home')}</Link>
        <Link href={`/about`}>{t('nav.about')}</Link>
        <Link href={`/services`}>{t('nav.services')}</Link>
        <Link href={`/contact`}>{t('nav.contact')}</Link>
      </div>
      <LanguageSwitcher />
    </nav>
  );
}