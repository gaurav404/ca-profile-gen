'use client';
import { setLocaleCookie } from '@/serverActions/action';
import {useRouter, usePathname} from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang: string) => {
    setLocaleCookie(lang);
    router.refresh();
  };

  return (
    <select
      onChange={(e) => changeLang(e.target.value)}
      className="border p-1 rounded"
      defaultValue={pathname.split('/')[1]}
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="as">অসমীয়া</option>
    </select>
  );
}