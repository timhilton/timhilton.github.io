import { getCLS, getFID, getLCP } from "web-vitals";

function sendWebVitalsToGA({ name, value }) {
  // Send the metric to Google Analytics
  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
    });
  }
}

function setupWebVitalsTracking() {
  getCLS(sendWebVitalsToGA);
  getFID(sendWebVitalsToGA);
  getLCP(sendWebVitalsToGA);
}

export default setupWebVitalsTracking;
