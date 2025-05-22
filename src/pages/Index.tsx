
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import QuickDetails from '../components/QuickDetails';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <QuickDetails />
      
      {/* Call to Action Section */}
      <div className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            {/* CUSTOMIZE: Replace with your CTA heading */}
            We Can't Wait to Celebrate With You!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {/* CUSTOMIZE: Replace with your CTA text */}
            Join us for an unforgettable day filled with love, laughter, and happily ever after.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rsvp"
              className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-3 rounded-full font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              RSVP Now
            </a>
            <a
              href="/story"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 transform"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-serif mb-2">
              {/* CUSTOMIZE: Replace with couple's names */}
              Partner 1 & Partner 2
            </h3>
            <p className="text-gray-400">
              {/* CUSTOMIZE: Replace with your wedding date and location */}
              Month Day, Year • Venue Name, Location
            </p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              {/* CUSTOMIZE: Replace with your footer message */}
              Made with ❤️ for our special day
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
