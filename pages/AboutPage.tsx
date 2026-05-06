import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

interface FounderCardProps {
  imageSrc: string;
  name: string;
  role: string;
  paragraphs: string[];
  quote: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ imageSrc, name, role, paragraphs, quote }) => (
  <div className="bg-white pt-20 p-8 rounded-lg shadow-xl flex flex-col items-center text-center relative">
    <img
      src={imageSrc}
      alt={`${name}, ${role}`}
      className="rounded-full shadow-2xl w-40 h-40 object-cover border-8 border-white absolute -top-20"
    />
    <h2 className="text-3xl font-bold text-bright-blue-700 mb-2">{name}</h2>
    <p className="font-medium text-gray-500 mb-4">{role}</p>
    <div className="text-left space-y-4 text-gray-700 leading-relaxed">
      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
      <p className="font-semibold text-center pt-4 italic text-bright-blue-800">
        "{quote}"
      </p>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
  const founders: FounderCardProps[] = [
    {
      imageSrc: '/Assets/Lucky pic - about.jpg',
      name: 'Eng. Lucky Kitonyi',
      role: 'Founder & Visionary',
      paragraphs: [
        'Eng. Lucky Kitonyi, a proud native of Kibauni Ward in Mwala, is the visionary founder of Smart Education. Having grown up in the very community she now serves, Lucky witnessed firsthand the immense potential and the significant challenges faced by young students. Her personal journey fueled a deep-seated passion to create pathways for others to succeed.',
        'She started this initiative to bridge the gap between potential and opportunity, believing that with the right mentorship, motivation, and resources, every child can achieve their dreams.'
      ],
      quote: 'We are not just giving handouts; we are lighting a fire of ambition and hope in the hearts of our future leaders.'
    },
    {
      imageSrc: '/Assets/Grace picture-about page.jpeg',
      name: 'Dr. Grace Kitonyi',
      role: 'CEO',
      paragraphs: [
        'Dr. Grace Kitonyi, a skilled lecturer also hailing from Kibauni, leads Smart Education with a shared vision. She brings a powerful perspective on the role of technology and modern skills in education and is deeply passionate about mentoring young minds to thrive in underserved areas.',
        'Her expertise helps shape programs that are not only inspirational but also practical, preparing students for future careers and ensuring they have access to the same opportunities as their urban counterparts.'
      ],
      quote: 'By blending mentorship with technology, we can unlock unprecedented potential in our students.'
    }
  ];

  return (
    <AnimatedPage>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h1 className="text-4xl font-bold text-bright-blue-800">Our Story</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Smart Education was born from a shared passion to uplift Kenya's youth. Discover the visionaries who started it all.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {founders.map((founder, index) => (
              <FounderCard key={index} {...founder} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
