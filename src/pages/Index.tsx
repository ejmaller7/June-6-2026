
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import QuickDetails from '../components/QuickDetails';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <QuickDetails />
      
      {/* Call to Action Section */}
      <div className="py-16 bg-pale-yellow text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
            {/* CUSTOMIZE: Replace with your CTA heading */}
            We Can't Wait to Celebrate With You!
          </h2>
          <p className="text-xl mb-8 text-black">
            {/* CUSTOMIZE: Replace with your CTA text */}
            Join us for an unforgettable day filled with love, laughter, and happily ever after.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rsvp"
              className="bg-pale-yellow border border-black text-black hover:bg-white px-8 py-3 rounded-full font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              RSVP Now
            </a>
            <a
              href="/story"
              className="bg-transparent border-2 border-black text-black hover:bg-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 transform"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-pale-blue text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-serif mb-2 text-black">
              {/* CUSTOMIZE: Replace with couple's names */}
              Ethan & Marlena
            </h3>
            <p className="text-black">
              {/* CUSTOMIZE: Replace with your wedding date and location */}
              June 6, 2026 • Stonehaven at the Milestone, New Braunfels, TX
            </p>
          </div>
          <div className="border-t border-black pt-6">
            <p className="text-black text-sm">
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
