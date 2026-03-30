export const seoConfig = {
  title: 'Next.js 15 Full-Stack SaaS MVP Builder | Portfolio',
  description: 'Professional Next.js developer shipping production-ready SaaS MVPs in 7–14 days. Specializing in React, TypeScript, Tailwind CSS, and modern full-stack development.',
  url: 'https://yourportfolio.com',
  image: 'https://yourportfolio.com/preview.png',
  twitterHandle: '@yourhandle',
};

export const getMetaTags = (customConfig = {}) => {
  const config = { ...seoConfig, ...customConfig };

  return {
    title: config.title,
    meta: [
      { name: 'description', content: config.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:url', content: config.url },
      { property: 'og:image', content: config.image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: config.twitterHandle },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image', content: config.image },
    ],
  };
};