import { useEffect } from 'react';

function updateMeta(selector, attribute, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

function PageMeta({ title, description, pathname = '/', image = 'https://jaykon.dev/og-card.svg' }) {
  useEffect(() => {
    const url = `https://jaykon.dev${pathname}`;

    document.title = title;
    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:url"]', 'content', url);
    updateMeta('meta[property="og:image"]', 'content', image);
    updateMeta('meta[name="twitter:title"]', 'content', title);
    updateMeta('meta[name="twitter:description"]', 'content', description);
    updateMeta('meta[name="twitter:image"]', 'content', image);
    updateMeta('link[rel="canonical"]', 'href', url);
  }, [description, image, pathname, title]);

  return null;
}

export default PageMeta;
