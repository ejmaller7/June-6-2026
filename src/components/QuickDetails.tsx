
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const QuickDetails = () => {
  // CUSTOMIZE: Replace with your wedding details
  const details = [
    {
      icon: Calendar,
      title: 'Wedding Date',
      info: 'June 6, 2026', // Replace with your wedding date
    },
    {
      icon: Clock,
      title: 'Ceremony Time',
      info: '6:30', // Replace with your ceremony time
    },
    {
      icon: MapPin,
      title: 'Venue',
      info: 'Stonehaven at the Milestone in New Braunfels, TX', // Replace with your venue name and location
    },
    {
      icon: Users,
      title: 'Dress Code',
      info: 'Black Tie Optional', // Replace with your dress code
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
            Wedding Details
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            {/* CUSTOMIZE: Replace with your details intro text */}
            Here are all of the essential details for our special day. We can't wait to celebrate with you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white border border-pale-yellow hover:shadow-lg transition-shadow duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pale-yellow rounded-full mb-4">
                <detail.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{detail.title}</h3>
              <p className="text-black">{detail.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickDetails;
