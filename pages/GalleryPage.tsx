import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const GalleryCard: React.FC<{
  imageUrl: string;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ imageUrl, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
  >
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-bright-blue-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Misty Forest",
      description: "A peaceful morning view deep within a lush, mist-filled forest.",
      imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id: 2,
      title: "Sunny Mountains",
      description: "Golden sunlight shining beautifully over majestic mountain peaks.",
      imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    },
    {
      id: 3,
      title: "Ocean Waves",
      description: "Crystal blue waves rolling gently onto the warm sandy shore.",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 4,
      title: "Blooming Spring",
      description: "Bright, colorful blossoms welcoming a new season of life.",
      imageUrl: "https://images.unsplash.com/photo-1498928715928-473fa340987a",
    },
  ];

  return (
    <AnimatedPage>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">Gallery</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Explore beautiful moments captured in nature.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {galleryItems.map((item) => (
              <GalleryCard
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              className="w-full h-96 object-cover rounded-lg"
            />

            <h2 className="text-3xl font-bold text-bright-blue-800 mt-4">
              {selectedItem.title}
            </h2>

            <p className="text-gray-700 mt-2">{selectedItem.description}</p>

            <button
              onClick={() => setSelectedItem(null)}
              className="mt-6 bg-bright-blue-700 text-white px-5 py-2 rounded-lg hover:bg-bright-blue-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
};

export default GalleryPage;
