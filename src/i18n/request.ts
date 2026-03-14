import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }


  const Home = (await import(`../../messages/${locale}/Home.json`)).default;
  const Initiatives = (await import(`../../messages/${locale}/Initiatives.json`)).default;
  const Media = (await import(`../../messages/${locale}/Media.json`)).default;
  const PrinceMohamed = (await import(`../../messages/${locale}/PrinceMohamed.json`)).default;
  const Interview = (await import(`../../messages/${locale}/Interview.json`)).default;

  return {
    locale,
    messages: {
      Home,
      Initiatives,
      Media,
      PrinceMohamed,
      Interview
    }
  };
});
