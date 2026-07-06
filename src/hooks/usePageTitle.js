import { useEffect } from 'react';

const SITE_NAME = 'WakeupSkills';
const DEFAULT_DESCRIPTION = 'WakeupSkills offers career-ready online courses in web development, data, cloud, and AI with project-based learning, mentorship, and placement support.';
const DEFAULT_IMAGE_PATH = '/src/assets/wakeupskills-logo.png';

function setMetaTag(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function getPageUrl(path) {
  if (typeof window === 'undefined') return '';
  const origin = window.location.origin;
  return path ? `${origin}${path}` : window.location.href;
}

/**
 * usePageTitle - Sets the document title and updates page metadata.
 *
 * @param {string} title - Page title (e.g., "Home", "About Us")
 * @param {string} description - Meta description for the page.
 * @param {string} path - Optional path used for og:url.
 */
export default function usePageTitle(title, description = DEFAULT_DESCRIPTION, path = '') {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = pageTitle;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', getPageUrl(path));
    setMetaTag('property', 'og:image', getPageUrl(DEFAULT_IMAGE_PATH));
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', getPageUrl(DEFAULT_IMAGE_PATH));

    return () => {
      document.title = SITE_NAME;
      setMetaTag('name', 'description', DEFAULT_DESCRIPTION);
      setMetaTag('property', 'og:title', SITE_NAME);
      setMetaTag('property', 'og:description', DEFAULT_DESCRIPTION);
      setMetaTag('property', 'og:url', window.location.origin);
      setMetaTag('property', 'og:image', getPageUrl(DEFAULT_IMAGE_PATH));
      setMetaTag('name', 'twitter:title', SITE_NAME);
      setMetaTag('name', 'twitter:description', DEFAULT_DESCRIPTION);
      setMetaTag('name', 'twitter:image', getPageUrl(DEFAULT_IMAGE_PATH));
    };
  }, [title, description, path]);
}
