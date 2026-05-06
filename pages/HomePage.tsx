import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

interface CoreProgramCardProps {
  title: string;
  description: string;
}

const CoreProgramCard: React.FC<CoreProgramCardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-xl font-bold text-bright-blue-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  const corePrograms = [
    {
      title: 'Mentorship & Career Guidance',
      description: 'Connecting students with role models and equipping them with knowledge about future career paths to build confidence and ambition.'
    },
    {
      title: 'Student Awards & Recognition',
      description: 'Awarding top-performing and committed students to foster a spirit of excellence and keep them motivated.'
    },
    {
      title: 'Inspire & Excel Program',
      description: 'Through school outreach sessions, we inspire students to dream bigger and work smarter. Our approach blends mentorship, real-life guidance, and engaging STEM-based challenges to strengthen both mindset and academic performance. By exposing learners to science, technology, engineering, and mathematics in practical and exciting ways, we nurture confident, resilient students who are prepared to shape their own future.'
    },
    {
      title: 'Voices & Vision Program',
      description: 'We empower students to speak, think, and lead with confidence. Through interactive dialogue sessions, we expose learners to new perspectives, challenge limiting beliefs, and encourage bold thinking. The goal is simple: help every student see possibilities beyond their current environment—and believe they can reach them.'
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/Assets/home page.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
            Empowering Young Minds, Changing Futures
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 animate-fade-in-up">
            Our mission is to empower over 2,000 students in underserved areas to pursue education with passion through mentorship, motivation, and essential school materials.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/donate" className="bg-bright-blue-600 hover:bg-bright-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Donate Now
            </Link>
            <Link to="/get-involved" className="bg-white hover:bg-gray-200 text-bright-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-bright-blue-800 mb-4">Our Core Programs</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            We focus on holistic development to ensure every student has the opportunity to succeed.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {corePrograms.map((program, index) => (
              <CoreProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default HomePage;
