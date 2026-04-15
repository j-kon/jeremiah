export function trackEvent(name, props = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = { event: name, ...props };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, props);
  }

  if (typeof window.plausible === 'function') {
    window.plausible(name, { props });
  }

  window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail: payload }));
}

export function trackPageView(path, title) {
  trackEvent('page_view', { path, title });
}
