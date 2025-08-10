import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations('home')
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <div className="flex justify-center">
        <Image
          src="/profile.png"
          alt={t('name')}
          width={180}
          height={180}
          className="rounded-full mb-6"
        />
      </div>
      <h1 className="text-4xl font-bold">
        {t('name')}, {t('title')}
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        {t('description')}
      </p>
    </div>
  );
}
