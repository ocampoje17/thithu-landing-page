export const ANALYTICS_CONSENT_STORAGE_KEY = 'thithu.analytics-consent';

const MEASUREMENT_ID = 'G-QL0RJ8863V';
const GOOGLE_ANALYTICS_SCRIPT_ID = 'thithu-google-analytics';

export type AnalyticsConsent = 'granted' | 'denied';

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: Gtag;
  }
}

let analyticsInitialized = false;

export function getAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const storedConsent = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return storedConsent === 'granted' || storedConsent === 'denied' ? storedConsent : null;
  } catch {
    return null;
  }
}

export function saveAnalyticsConsent(consent: AnalyticsConsent): void {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch (error) {
    console.warn('Unable to save the analytics consent preference:', error);
  }
}

function getGtag(): Gtag {
  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  return window.gtag;
}

export function initializeAnalytics(): void {
  if (analyticsInitialized || document.getElementById(GOOGLE_ANALYTICS_SCRIPT_ID)) {
    analyticsInitialized = true;
    return;
  }

  const gtag = getGtag();

  gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement('script');
  script.id = GOOGLE_ANALYTICS_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.onerror = () => {
    console.warn('Unable to load Google Analytics.');
  };

  document.head.append(script);
  analyticsInitialized = true;
}

export function trackDownloadClick(linkUrl: string): void {
  if (!analyticsInitialized || !window.gtag) {
    return;
  }

  window.gtag('event', 'download_click', { link_url: linkUrl });
}
