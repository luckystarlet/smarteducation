import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

interface ProgramCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ imageSrc, title, description }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-bright-blue-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      imageSrc: '/Assets/image for mentorship - program.jpg',
      title: 'Mentorship & Career Guidance',
      description: 'We connect students with successful professionals and community leaders for mentorship and provide inspiring talks to build confidence and ambition. Our program also equips students with knowledge about future career paths, effective study skills, and the tools needed to achieve their long-term goals.'
    },
    {
      imageSrc: '/Assets/Awards and Mentorship.jpeg',
      title: 'Student Awards & Recognition',
      description: 'To foster a spirit of excellence and dedication, we partner with schools in underserved areas to award the most committed and top-performing students. This recognition helps to keep students motivated and zealous about their education.'
    },
    {
      imageSrc: '/Assets/gal diginity - program.jpeg',
      title: 'Girls’ Dignity Project',
      description: 'We are committed to keeping girls in school by tackling period poverty. Through this project, we distribute sanitary pads and provide health education, ensuring that menstruation is never a barrier to a girl\'s education.'
    },
    {
      imageSrc: '/Assets/Scholarship Assistance.jpeg',
      title: 'Scholarship Assistance Program',
      description: 'We help vulnerable, focused, and committed students find and apply for scholarships. Our goal is to remove financial barriers and connect deserving students with opportunities for higher education.'
    }
  ];

  return (
    <AnimatedPage>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">Our Programs</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Creating a brighter future through targeted support and empowerment.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProgramsPage;
