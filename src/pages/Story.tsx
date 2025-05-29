
import React from 'react';
import Navbar from '../components/Navbar';
import Proposal1 from '../../public/images/Proposal1.jpg';
import Proposal2 from '../../public/images/Proposal2.jpg';
import Proposal3 from '../../public/images/Proposal3.jpg';
import Proposal4 from '../../public/images/Proposal4.jpg';
import Proposal5 from '../../public/images/Proposal5.jpg';
import Proposal6 from '../../public/images/Proposal6.jpg';

const Story = () => {
  // CUSTOMIZE: Replace with your own story timeline events
  const timeline = [
    {
      year: '2016', // Replace with actual year
      title: 'First time meeting each other',
      description: 'The first time we ever met was on a soccer field during his sophomore year and her freshman year. They instantly knew nothing, other than Ethan telling his parents of this "cute freshman girl".', // Replace with your story
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with your photo
    },
    {
      year: '2018', // Replace with actual year
      title: 'First Date',
      description: 'After promising one of her best friends, Ethan decided to not take Marlena to prom this year, but still went and from there, started getting to know her and eventually asked her out to go to dinner and a movie on June 1, 2018. They ended up going to P.F. Changs and seeing Avengers: Infinity War.', // Replace with your story
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with your photo
    },
    {
      year: '2023 & 2024', // Replace with actual year
      title: 'Graduating College',
      description: 'After meeting in high school, we both went to colleges in San Antonio where we grew our relationship.  Ethan graduated in 2023 from the University of Texas at San Antonio with a degree in Finance and Marlena graduated in 2024 from the University of Incarnate Word with a degree in Nursing.', // Replace with your story
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with your photo
    },
    {
      year: '2024', // Replace with actual year
      title: 'The Proposal',
      description: 'On October 12, 2024, after waiting for what was actually years, Ethan finally got down on one knee at Boerne Lake, where he asked Marlena to marry him and spend the rest of her life with him, to which she said yes.', // Replace with your story
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
            Our Story
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your story introduction */}
            Every love story is special in its own way, but ours is one for the ages (at least we would like to think so). From going to high school together for
            2 years (almost) before ever actually talking to each other, to going through college and embarking on the rest of life's journey with each other, we have experienced
            so much already together and cannot wait for the many memories and years to come.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-pale-yellow h-full"></div>
            
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-pale-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-pale-yellow">
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
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Engagement Photos
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              {/* CUSTOMIZE: Replace with your engagement photos description */}
              Here are a few photos of the actual moment where Ethan proposed to Marlena, which
              capture the beatiful moment shared together that marked the next step on our
              journey together through life.
            </p>
          </div>
          
          {/* CUSTOMIZE: Replace these placeholders with your actual photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example of how to add your engagement photos */}
            {/* Replace the URLs with your actual photo URLs */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pale-yellow">
                <img 
                  src={Proposal1}
                  alt={`Engagement photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                 <img 
                  src={Proposal2}
                  alt={`Engagement photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                 <img 
                  src={Proposal3}
                  alt={`Engagement photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                 <img 
                  src={Proposal4}
                  alt={`Engagement photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                 <img 
                  src={Proposal5}
                  alt={`Engagement photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                 <img 
                  src={Proposal6}
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
