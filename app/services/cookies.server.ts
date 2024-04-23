import { createCookie } from '@remix-run/node';

export const userPrefs = createCookie('vertc-qualityreview-front-user-prefs', {
  maxAge: 60 * 60 * 24 * 365, // 1 year
});
