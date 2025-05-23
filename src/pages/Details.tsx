
import React from 'react';
import Navbar from '../components/Navbar';
import { MapPin, Clock, Car, Hotel, UtensilsCrossed, Gift, Music } from 'lucide-react';

const Details = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            Wedding Details
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your wedding details introduction */}
            We're excited to share all the details you need for our special day. Please read through the information below to help plan your attendance.
          </p>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Wedding Day Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {/* CUSTOMIZE: Add a brief intro about your schedule */}
              Here is a rough time frame of what to expect on the day of our wedding.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* CUSTOMIZE: Add your schedule items here - example structure provided */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4 md:mb-0 flex-shrink-0">
                  <Clock className="w-8 h-8 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {/* CUSTOMIZE: Event name */}
                    Ceremony
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {/* CUSTOMIZE: Time */}
                    6:00 PM - 6:30 PM
                  </p>
                  <p className="text-gray-600 mb-4">
                    {/* CUSTOMIZE: Location */}
                    Cocktail Hour
                  </p>
                  <p className="text-gray-600 mb-2">
                    {/* CUSTOMIZE: Description */}
                    6:30 PM - 7:30 PM
                  </p>
                  <p className="text-gray-600 mb-4">
                    {/* CUSTOMIZE: Description */}
                    Introduction of Bridal Party & Newlyweds
                  </p>
                  <p className="text-gray-600 mb-2">
                    {/* CUSTOMIZE: Description */}
                    7:30 PM - 7:40 PM
                  </p>
                  <p className="text-gray-600 mb-4">
                    {/* CUSTOMIZE: Description */}
                    Dinner
                  </p>
                  <p className="text-gray-600 mb-2">
                    {/* CUSTOMIZE: Description */}
                    7:45 PM - 8:30 PM
                  </p>
                  <p className="text-gray-600 mb-4">
                    {/* CUSTOMIZE: Description */}
                    First Dance
                  </p>
                  <p className="text-gray-600 mb-2">
                    {/* CUSTOMIZE: Description */}
                    8:30 PM
                  </p>
                     <p className="text-gray-600 mb-4">
                    {/* CUSTOMIZE: Description */}
                    Dancing until Dawn
                  </p>
                  <p className="text-gray-600 mb-2">
                    {/* CUSTOMIZE: Description */}
                    8:30 PM - 11:00 PM
                  </p>
                </div>
              </div>

              {/* CUSTOMIZE: Add more schedule items following the same pattern */}
              {/* Example: Cocktail Hour, Reception, Dinner, Dancing, etc. */}
            </div>
          </div>
        </div>
      </div>

      {/* Venue Information */}
      <div className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Venue Information
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                {/* CUSTOMIZE: Replace with your venue image */}
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Venue" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {/* CUSTOMIZE: Replace with your venue name */}
                  Stonehaven at the Milestone
                </h3>
                
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-gray-600">
                      {/* CUSTOMIZE: Replace with your venue address */}
                      1723 Herbelin Rd, New Braunfels, TX 78132
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-6">
                  <Car className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Parking Information:</p>
                    <p className="text-gray-600">
                      {/* CUSTOMIZE: Add parking details */}
                      Self-parking available on gravel. Parking in the first lot when you pull in to the venue on the right hand sand.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700">
                    {/* CUSTOMIZE: Add venue description or additional information */}
                    Our venue features stunning views of the beautiful indoor and outdoor spaces for the ceremony and reception.
                  </p>
                </div>
                
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-rose-600 font-medium hover:text-rose-700 transition-colors"
                >
                  {/* CUSTOMIZE: Replace with link to venue website or map */}
                  View on Map
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodations */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Accommodations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {/* CUSTOMIZE: Add accommodations intro */}
              We've reserved a room at the JW Marriott for our wedding night, and anyone wanting to stay at the hotel as well is welcome to stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CUSTOMIZE: Replace with your accommodation options */}
            {/* Hotel 1 Example */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hotel" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-rose-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {/* CUSTOMIZE: Hotel name */}
                    JW Marriott
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {/* CUSTOMIZE: Hotel description, address, and details */}
                  Located 30 minutes from the venue. This is one of the nicest hotels in San Antonio.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-rose-600 font-medium">
                    {/* CUSTOMIZE: Room rate */}
                    $400/night
                  </span>
                  <a 
                    href="https://www.marriott.com/search/availabilityCalendar.mi?isRateCalendar=true&propertyCode=SATJW&isSearch=true&currency=&costTab=average#/0/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full transition-colors"
                  >
                    {/* CUSTOMIZE: Replace with booking link */}
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* CUSTOMIZE: Add more hotel options following the same pattern */}
          </div>
        </div>
      </div>

      {/* Travel Information */}
      <div className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Travel Information
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            {/* CUSTOMIZE: Add your travel information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">By Air</h3>
                <p className="text-gray-600">
                  {/* CUSTOMIZE: Airport information */}
                  The nearest airport is the San Antonio Airport, which is approximately 40 minutes from the venue, and 30 minutes from the hotel.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">By Car</h3>
                <p className="text-gray-600">
                  {/* CUSTOMIZE: Driving directions */}
                  From Highway 281, 
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Transportation</h3>
                <p className="text-gray-600">
                  {/* CUSTOMIZE: Transportation options */}
                  Shuttle service will be provided from the recommended hotel to the venue and back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Additional Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* CUSTOMIZE: Add additional information blocks as needed */}
            
            {/* Attire */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4">
                <UtensilsCrossed className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dinner Options</h3>
              <p className="text-gray-600">
                {/* CUSTOMIZE: Add information about food options */}
                {/* Example: We will be serving a choice of Option 1 or Option 2. Please indicate your preference in the RSVP form. */}
              </p>
            </div>
            
            {/* Registry */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4">
                <Gift className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Registry</h3>
              <p className="text-gray-600 mb-4">
                {/* CUSTOMIZE: Add information about your registry */}
                {/* Example: We've registered at several stores. Visit our registry page to see our wish list. */}
              </p>
              <a 
                href="/registry" 
                className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
              >
                View Registry
              </a>
            </div>
            
            {/* Music */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4">
                <Music className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Song Requests</h3>
              <p className="text-gray-600">
                {/* CUSTOMIZE: Add information about music requests */}
                {/* Example: Have a song you want to hear at the reception? Let us know in your RSVP! */}
              </p>
            </div>
            
            {/* CUSTOMIZE: Add more information blocks as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
