import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

interface GalleryCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ imageSrc, title, subtitle, description }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-bright-blue-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  const galleryItems: GalleryCardProps[] = [
    {
      imageSrc: '/Assets/Chock-chok primary school.jpeg',
      title: 'Chok-Chok Primary School',
      subtitle: 'Turkana County',
      description:
        'Empowering the girl child to stay in school, build confidence, and pursue academic excellence. Our mentorship and dignity support programs help young girls overcome barriers and believe in their own potential.'
    },
    {
      imageSrc: '/Assets/Lochar secondary school.jpeg',
      title: 'Lochar Secondary School',
      subtitle: 'Turkana County',
      description:
        'Inspiring and empowering boys to pursue careers in STEM fields. Through career guidance and motivational sessions, we encourage students to develop discipline, ambition, and a strong academic foundation.'
    },
    {
      imageSrc: '/Assets/Mathare Girls High school.jpeg',
      title: 'Mathare Girls High School',
      subtitle: 'Nairobi County',
      description:
        'Supporting and motivating young women to pursue STEM education by exposing them to career opportunities, mentorship, and leadership development programs designed to strengthen their future paths.'
    },
    {
      imageSrc: '/Assets/Kiukuni primary school.jpeg',
      title: 'Kiukuni Primary School',
      subtitle: 'Machakos County',
      description:
        'We inspire learners to embrace discipline, focus, and hard work. Our goal is to cultivate responsible students who are committed to academic success and positive personal growth.'
    }
  ];

  return (
    <AnimatedPage>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">Gallery</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Moments of hope, growth, and empowerment — captured during our school visits,
              mentorship programs, and community outreach initiatives, showcasing the impact of
              guidance, dignity support, and educational inspiration on learners across Kenya.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GalleryPage;
