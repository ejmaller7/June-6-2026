
import React from 'react';
import Navbar from '../components/Navbar';

const Story = () => {
  const timeline = [
    {
      year: '2018',
      title: 'First Meeting',
      description: 'We met at a coffee shop on a rainy Tuesday morning. John spilled coffee on Sarah\'s laptop, and the rest is history!',
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      year: '2019',
      title: 'First Date',
      description: 'Our first official date was at the local farmer\'s market, followed by a picnic in the park.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      year: '2021',
      title: 'Moving In Together',
      description: 'We took the big step and moved into our first apartment together in downtown.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      year: '2023',
      title: 'The Proposal',
      description: 'John proposed during a sunset hike at our favorite trail, with a ring hidden in the picnic basket.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            Our Love Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-rose-200 h-full"></div>
            
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-rose-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-rose-600 font-bold text-lg mb-2">{event.year}</div>
                      <h3 className="text-2xl font-serif text-gray-800 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Engagement Photos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our engagement photo session, capturing the joy and excitement 
              of this special chapter in our lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
