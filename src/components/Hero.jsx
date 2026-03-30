import React from 'react';
// Remove unused motion import

const Hero = () => {
  const words = "Next.js 15 Full-Stack SaaS MVP Builder".split(' ');

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4 bg-linear-to-br from-[#f0f9ff] to-[#f8fafc]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block mr-3 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-12 font-light">
          I ship production apps in <span className="font-semibold text-blue-500">7–14 days</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#projects"
            className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Avg Delivery', value: '10 Days' },
            { label: 'Tech Stack', value: 'Next.js 15' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;