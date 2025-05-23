
import React from 'react';
import Navbar from '../components/Navbar';

const Story = () => {
  // CUSTOMIZE: Replace with your own story timeline events
  const timeline = [
    {
      year: '20XX', // Replace with actual year
      title: 'First Meeting',
      description: 'Describe how you first met', // Replace with your story
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with your photo
    },
    {
      year: '20XX', // Replace with actual year
      title: 'First Date',
      description: 'Describe your first date', // Replace with your story
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with your photo
    },
    {
      year: '20XX', // Replace with actual year
      title: 'Moving In Together',
      description: 'Describe this milestone', // Replace with your story
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with your photo
    },
    {
      year: '20XX', // Replace with actual year
      title: 'The Proposal',
      description: 'Describe the proposal', // Replace with your story
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with your photo
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Our Love Story
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your story introduction */}
            Every love story is beautiful, but ours is our favorite. From a chance encounter 
            to forever together, here's how our journey began and where it's leading us.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-pale-blue h-full"></div>
            
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-pale-yellow rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-pale-blue font-bold text-lg mb-2">{event.year}</div>
                      <h3 className="text-2xl font-serif text-black mb-3">{event.title}</h3>
                      <p className="text-black leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Photos Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Engagement Photos
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              {/* CUSTOMIZE: Replace with your engagement photos description */}
              A glimpse into our engagement photo session, capturing the joy and excitement 
              of this special chapter in our lives.
            </p>
          </div>
          
          {/* CUSTOMIZE: Replace these placeholders with your actual photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example of how to add your engagement photos */}
            {/* Replace the URLs with your actual photo URLs */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-${1519741497674 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={`Engagement photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
