
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
    },
    {
      year: '2018', // Replace with actual year
      title: 'First Date',
      description: 'After promising one of her best friends, Ethan decided to not take Marlena to prom this year, but still went and from there, started getting to know her and eventually asked her out to go to dinner and a movie on June 1, 2018. They ended up going to P.F. Changs and seeing Avengers: Infinity War.', // Replace with your story
    },
    {
      year: '2023 & 2024', // Replace with actual year
      title: 'Graduating College',
      description: 'After meeting in high school, we both went to colleges in San Antonio where we grew our relationship.  Ethan graduated in 2023 from the University of Texas at San Antonio with a degree in Finance and Marlena graduated in 2024 from the University of Incarnate Word with a degree in Nursing.', // Replace with your story
    },
    {
      year: '2024', // Replace with actual year
      title: 'The Proposal',
      description: 'On October 12, 2024, after waiting for what was actually years, Ethan finally got down on one knee at Boerne Lake, where he asked Marlena to marry him and spend the rest of her life with him, to which she said yes.', // Replace with your story
    },
  ];

  const engagementPhotos = [Proposal1, Proposal2, Proposal3, Proposal4, Proposal5, Proposal6];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle wildflower background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full bg-repeat" 
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop&crop=center")`,
            backgroundSize: '150px 150px',
            backgroundPosition: '0 0, 75px 75px'
          }}
        ></div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative z-10">
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
      <div className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-pale-yellow h-full"></div>
            
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12'}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-pale-yellow">
                    <div className="text-blue-400 font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-2xl font-serif text-black mb-4">{event.title}</h3>
                    <p className="text-black leading-relaxed text-lg">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Photos Section */}
      <div className="py-16 bg-pale-yellow/50 backdrop-blur-sm relative z-10">
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
            {engagementPhotos.map((photo, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pale-yellow">
                <img 
                  src={photo}
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
