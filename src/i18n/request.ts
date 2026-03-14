import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }


  const Home = (await import(`../../messages/${locale}/Home.json`)).default;
  const Initiatives = (await import(`../../messages/${locale}/Initiatives.json`)).default;

  return {
    locale,
    messages: {
      Home,
      Initiatives
    }
  };
});