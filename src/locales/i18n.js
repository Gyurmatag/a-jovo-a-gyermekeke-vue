import { createI18n } from 'vue-i18n';

import messages from '@/locales/messages';

const i18n = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'hu',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'hu',
  silentTranslationWarn: true,
  objectNotation: true,
  messages,
});

export default i18n;
