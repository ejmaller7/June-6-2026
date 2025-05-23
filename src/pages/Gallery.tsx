
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

// CUSTOMIZE: Replace this interface and the placeholder images with your actual photos
// You'll want to add your own images to the public folder or import them
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Gallery = () => {
  // CUSTOMIZE: Replace this array with your actual photos
  // Format: { id: unique number, src: path to image, alt: description, width: original width, height: original height }
  const [images, setImages] = useState<GalleryImage[]>([
    // CUSTOMIZE: Add your engagement photos here
    // Example format:
    // { id: 1, src: "/path/to/image.jpg", alt: "Description of photo", width: 1200, height: 800 },
  ]);

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your gallery introduction */}
            {/* Example: Explore our favorite moments from our engagement photoshoot. Click on any image to enlarge. */}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-black">
                {/* This message will show when no images have been added yet */}
                No photos have been added yet. Please add your engagement photos to display them here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div 
                  key={image.id}
                  className="aspect-[3/4] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-pale-yellow"
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 md:left-8 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={prevImage}
          >
            &#10094;
          </button>
          
          <img 
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
          
          <button 
            className="absolute right-4 md:right-8 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Upload Instructions */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-black mb-6">
            Add Your Photos
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-pale-yellow">
            <p className="text-lg text-black mb-6">
              {/* CUSTOMIZE: Instructions for adding photos */}
              To add your engagement photos to the gallery, you'll need to:
            </p>
            <ol className="text-left space-y-4 text-black max-w-lg mx-auto">
              <li className="flex items-start">
                <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-2 flex-shrink-0">1</span>
                <span>Upload your images to the public folder in the project</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-2 flex-shrink-0">2</span>
                <span>Edit this file (Gallery.tsx) to include your images in the images array</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-2 flex-shrink-0">3</span>
                <span>For each image, include a unique ID, the path to the image, alt text, and the original dimensions</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
