import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function AboutPage() {
  const t = await getTranslations('about')
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">{t('heading')}</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Rishab Agarwala"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">{t('professionalBackground.title')}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t('professionalBackground.description')}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">{t('qualifications.title')}</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                {t('qualifications.ca')}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                {t('qualifications.experience')}
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">{t('expertise.title')}</h2>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-gray-100 px-3 py-2 rounded text-sm">{t('expertise.taxation')}</span>
              <span className="bg-gray-100 px-3 py-2 rounded text-sm">{t('expertise.audit')}</span>
              <span className="bg-gray-100 px-3 py-2 rounded text-sm">{t('expertise.compliance')}</span>
              <span className="bg-gray-100 px-3 py-2 rounded text-sm">{t('expertise.advisory')}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{t('mission.title')}</h2>
        <p className="text-gray-700 leading-relaxed">
          {t('mission.description')}
        </p>
      </div>
    </div>
  );
}