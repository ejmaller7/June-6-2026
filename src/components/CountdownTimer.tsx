
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // CUSTOMIZE: Replace with your wedding date and time in format 'YYYY-MM-DDTHH:MM:SS'
    const weddingDate = new Date('2026-06-06T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">
          {/* CUSTOMIZE: Replace with your countdown heading */}
          Counting Down to Our Big Day!
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">{value}</div>
              <div className="text-gray-600 font-medium capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
