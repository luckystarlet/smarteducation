
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const AboutPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">About Smart Education</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Discover the story and the passion that fuels our mission to uplift Kenya's youth.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Founder's Image */}
            <div className="md:col-span-2">
              <img
                src="https://picsum.photos/seed/lucky-kitonyi/500/500"
                alt="Lucky Kitonyi, Founder"
                className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-full md:h-auto object-cover border-8 border-white"
              />
            </div>

            {/* Founder's Story */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-bright-blue-700 mb-4">Meet Our Founder: Lucky Kitonyi</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Eng. Lucky Kitonyi, a proud native of Kibauni Ward in Mwala, Machakos County, is the visionary founder of Smart Education. Having grown up in the very community she now serves, Lucky witnessed firsthand the immense potential and the significant challenges faced by young students. Her personal journey through the local education system fueled a deep-seated passion to create pathways for others to succeed.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                She started this initiative to bridge the gap between potential and opportunity. Lucky believes that with the right mentorship, motivation, and basic resources, every child can achieve their dreams. Her vision is not just about providing materials, but about building a supportive ecosystem where students feel valued, inspired, and empowered to take their education seriously.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                "We are not just giving handouts; we are lighting a fire of ambition and hope in the hearts of our future leaders." - Lucky Kitonyi
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;