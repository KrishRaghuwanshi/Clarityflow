export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const PLAUSIBLE_ENABLED = process.env.NEXT_PUBLIC_PLAUSIBLE === '1';

export const pageview = (url: string) => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (GA_TRACKING_ID && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }

  // Plausible
  if (PLAUSIBLE_ENABLED && window.plausible) {
    window.plausible('pageview');
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (GA_TRACKING_ID && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Plausible
  if (PLAUSIBLE_ENABLED && window.plausible) {
    window.plausible(action, { props: { category, label } });
  }
};

// Type declarations for window
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    plausible: (...args: unknown[]) => void;
  }
}
