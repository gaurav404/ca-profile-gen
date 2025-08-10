import { getTranslations } from "next-intl/server";
const servicesIndexes = [0,1,2,3,4]
export default async function ServicesPage() {
    const t = await getTranslations('services')
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{t('heading')}</h1>
        <ul className="space-y-4">
          {servicesIndexes.map((index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              {t(`items.${index}`)}
            </li>
          ))}
        </ul>
      </div>
    );
  }