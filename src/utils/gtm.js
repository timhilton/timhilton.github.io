export const pageview = (url) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        path_url: url,
      });
    }
  };