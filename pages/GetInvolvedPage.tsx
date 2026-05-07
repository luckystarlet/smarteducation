import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

interface InvolvementCardProps {
  title: string;
  description: string;
  bulletPoints?: string[];
  extraText?: string;
  buttonLabel: string;
  buttonHref: string;
  buttonStyle: string;
}

const InvolvementCard: React.FC<InvolvementCardProps> = ({
  title,
  description,
  bulletPoints,
  extraText,
  buttonLabel,
  buttonHref,
  buttonStyle
}) => (
  <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-bright-blue-700 mb-4">{title}</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
    {bulletPoints && (
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
    {extraText && (
      <p className="text-gray-700 mb-6">{extraText}</p>
    )}
    
      href={buttonHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block text-white font-bold py-3 px-6 rounded-lg transition ${buttonStyle}`}
    >
      {buttonLabel}
    </a>
  </div>
);

const GetInvolvedPage: React.FC = () => {
  const involvementOptions: InvolvementCardProps[] = [
    {
      title: 'Become a Volunteer',
      description:
        'Lend your time and skills to make a direct impact. We are looking for passionate individuals to help with mentorship, event organization, and administrative support. Your dedication can inspire a student to pursue their dreams.',
      bulletPoints: [
        'Mentor a student',
        'Facilitate a workshop',
        'Help organize donation drives',
        'Provide administrative support'
      ],
      buttonLabel: 'Volunteer With Us',
      buttonHref: 'https://forms.gle/kPcE8AeTYfUd8HF19',
      buttonStyle: 'bg-bright-blue-600 hover:bg-bright-blue-700'
    },
    {
      title: 'Partner With Us',
      description:
        'Corporations, schools, and other organizations can play a crucial role in our mission. We welcome partnerships for corporate social responsibility (CSR) initiatives, event sponsorships, and in-kind donations of school materials or sanitary products.',
      extraText:
        "Let's collaborate to create a sustainable and impactful program that benefits the entire community.",
      buttonLabel: 'Become a Partner',
      buttonHref: 'https://forms.gle/4q1SuuvLzvnwDK7q9',
      buttonStyle: 'bg-gray-700 hover:bg-gray-800'
    }
  ];

  return (
    <AnimatedPage>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">Get Involved</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              You have the power to change a life. Join us as a volunteer, partner, or advocate to make a lasting impact.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {involvementOptions.map((option, index) => (
              <InvolvementCard key={index} {...option} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GetInvolvedPage;
