import React from 'react';

const Footer = () => {
  const socialLinks = {
    GitHub: 'https://github.com/OffycialDenys',
    LinkedIn: 'https://www.linkedin.com/in/antwi-denys-70b5782b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    Twitter: 'https://x.com/bigDzenys_?t=Bjt53zOkqG41pw96ZFoJ9A&s=09'
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-600">
              Next.js 15 Full-Stack SaaS MVP Builder. Shipping production apps in 7–14 days.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              {Object.entries(socialLinks).map(([social, url]) => (
                <a
                  key={social}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;