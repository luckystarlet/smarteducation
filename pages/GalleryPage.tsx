import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const GalleryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Chok-Chok Primary School – Turkana County',
      description:
        'This moment captures our engagement with learners at Chok-Chok Primary School in Turkana County. Through empowerment sessions and academic motivation, we help students build confidence and develop a positive mindset toward education.',
      imageUrl: '/Assets/Chock-chok primary school.jpeg',
    },
    {
      id: 2,
      title: 'Lochar Secondary School – Turkana County',
      description:
        'At Lochar Secondary School, we inspire students through leadership and career awareness programs designed to nurture ambition, discipline, and community impact through education.',
      imageUrl: '/Assets/Lochar secondary school.jpeg',
    },
    {
      id: 3,
      title: 'Mathare Girls High School – Nairobi',
      description:
        'A powerful moment from our mentorship and girls’ dignity initiative at Mathare Girls High School. We help young women build resilience, self-worth, and academic focus through open conversations and empowerment programs.',
      imageUrl: '/Assets/Mathare Girls High school.jpeg',
    },
    {
      id: 4,
      title: 'Kiukuni Primary School – Makueni County',
      description:
        'Captured during our visit to Kiukuni Primary School, where we motivated young learners to embrace education as a pathway to opportunity while providing guidance, encouragement, and inspiration.',
      imageUrl: '/Assets/Kiukuni primary school.jpeg',
    },
  ];

  return (
    <AnimatedPage>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">Gallery</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              A collection of impactful moments from our school visits, mentorship programs, and educational empowerment activities.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-bright-blue-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedItem && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-bright-blue-800">{selectedItem.title}</h2>
                  <p className="text-gray-600 mt-3 text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="mt-6 bg-bright-blue-600 text-white px-6 py-2 rounded-lg hover:bg-bright-blue-700 transition shadow"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GalleryPage;
