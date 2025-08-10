import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations('contact')
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{t('heading')}</h1>
        <form className="space-y-4 max-w-lg">
          <input
            type="text"
            placeholder={t('name')}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder={t('email')}
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder={t('message')}
            rows={4}
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg"
          >
            {t('send')}
          </button>
        </form>
      </div>
    );
  }
  