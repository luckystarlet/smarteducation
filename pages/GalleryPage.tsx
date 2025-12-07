import React, { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

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
    className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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

  // 10 beautiful nature / education images with smart-education themed captions
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Inspire the Future",
      description:
        "Empowering young minds through mentorship, curiosity, and meaningful academic support.",
      imageUrl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      id: 2,
      title: "Learning Beyond Walls",
      description:
        "Smart education encourages students to think creatively, explore boldly, and build real impact.",
      imageUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
    {
      id: 3,
      title: "Nature & Knowledge",
      description:
        "Just like nature grows with patience and nurture, so do learners when given the right support.",
      imageUrl:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 4,
      title: "Strength in Community",
      description:
        "We bring students, educators, and mentors together to build brighter futures through collaboration.",
      imageUrl:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    },
    {
      id: 5,
      title: "Girl’s Empowerment",
      description:
        "We create safe spaces for girls, ensuring dignity, opportunity, and equal access to education.",
      imageUrl:
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    },
    {
      id: 6,
      title: "Digital Learning Era",
      description:
        "Smart education leverages technology to make learning accessible, interactive, and future-ready.",
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 7,
      title: "Scholarship Support",
      description:
        "Opening doors to higher education for committed, talented, and hardworking students.",
      imageUrl:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    },
    {
      id: 8,
      title: "Celebrating Excellence",
      description:
        "Recognizing top-performing students motivates communities and fuels lifelong achievement.",
      imageUrl:
        "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb",
    },
    {
      id: 9,
      title: "Future Innovators",
      description:
        "Every child has the potential to become a leader, engineer, scientist, or creative thinker.",
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    },
    {
      id: 10,
      title: "Hope in Education",
      description:
        "Education remains the most powerful tool we give to young generations to break boundaries.",
      imageUrl:
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    },
  ];

  return (
    <AnimatedPage>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bright-blue-800">
              Gallery Highlights
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              A visual journey of our mission — empowering students, supporting
              communities, and shaping brighter futures through smart
              education.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
