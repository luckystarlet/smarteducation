
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const GetInvolvedPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">Get Involved</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">You have the power to change a life. Join us as a volunteer, partner, or advocate to make a lasting impact.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Become a Volunteer */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-bright-blue-700 mb-4">Become a Volunteer</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lend your time and skills to make a direct impact. We are looking for passionate individuals to help with mentorship, event organization, and administrative support. Your dedication can inspire a student to pursue their dreams.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Mentor a student</li>
                <li>Facilitate a workshop</li>
                <li>Help organize donation drives</li>
                <li>Provide administrative support</li>
              </ul>
              <Link to="/contact" className="inline-block bg-bright-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-bright-blue-700 transition">
                Volunteer With Us
              </Link>
            </div>

            {/* Partner With Us */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-bright-blue-700 mb-4">Partner With Us</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Corporations, schools, and other organizations can play a crucial role in our mission. We welcome partnerships for corporate social responsibility (CSR) initiatives, event sponsorships, and in-kind donations of school materials or sanitary products.
              </p>
              <p className="text-gray-700 mb-6">
                Let's collaborate to create a sustainable and impactful program that benefits the entire community.
              </p>
              <Link to="/contact" className="inline-block bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GetInvolvedPage;
