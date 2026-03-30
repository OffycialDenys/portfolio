import React from 'react';
import MotionWrapper from './MotionWrapper';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <MotionWrapper>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 leading-relaxed mb-6 shadow-lg">
              You need a SaaS MVP. You don&apos;t have 6 months. You don&apos;t have a bloated agency budget. 
              You need <span className="font-black text-blue-700 dark:text-blue-400">production-ready code</span>, 
              fast — without cutting corners.
            </p>

            <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 leading-relaxed mb-8">
              I&apos;m a full-stack developer specializing in <span className="font-black text-blue-600 dark:text-blue-400">Next.js 15</span>, 
              React, TypeScript, and modern SaaS architecture. I&apos;ve shipped 50+ MVPs for startups, 
              solopreneurs, and agencies — all delivered in <span className="font-black text-purple-600 dark:text-purple-400">7–14 days</span>.
            </p>

            <div className="bg-linear-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border-2 border-blue-200 dark:border-purple-500 mb-8 backdrop-filter backdrop-blur">
              <h3 className="text-2xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What I Build</h3>
              <ul className="space-y-4">
                {[
                  'SaaS dashboards with authentication (Clerk, NextAuth)',
                  'Payment integration (Stripe, LemonSqueezy)',
                  'Database architecture (Supabase, PostgreSQL, Prisma)',
                  'AI-powered features (OpenAI, Anthropic, LangChain)',
                  'Responsive UI/UX (Tailwind, Shadcn, Framer Motion)',
                  'Deployment & CI/CD (Vercel, Railway, GitHub Actions)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-1 font-bold"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-black text-blue-600 dark:text-blue-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linear-to-br from-blue-500/15 via-purple-500/10 to-blue-500/15 dark:from-blue-500/10 dark:via-purple-500/5 dark:to-blue-500/10 rounded-2xl p-8 border-2 border-blue-300 dark:border-purple-500 shadow-premium-lg mb-8 backdrop-filter backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Results</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { metric: '95%', label: 'Client Satisfaction' },
                  { metric: '10 Days', label: 'Average Delivery' },
                  { metric: '$250K+', label: 'Client Revenue Generated' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-black bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.metric}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed text-center">
              Ready to ship your MVP? <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-300 font-bold transition-colors">Let&apos;s talk</a>.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default About;