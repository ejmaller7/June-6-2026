import React from 'react';
import Navbar from '../components/Navbar';
import { MapPin, Clock, Car, Hotel, UtensilsCrossed, Gift, Music, Calendar } from 'lucide-react';

const Details = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Wedding Details
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your wedding details introduction */}
            We're excited to share all the details you need for our special day. Please read through the information below to help plan your attendance.
          </p>
        </div>
      </div>

      {/* Schedule Section - Improved layout */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Wedding Day Schedule
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              {/* CUSTOMIZE: Add a brief intro about your schedule */}
              Here is a rough time frame of what to expect on the day of our wedding.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white h-full"></div>
              
              {/* Timeline items */}
              <div className="space-y-10">
                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Ceremony
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          6:00 PM - 6:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        We will be getting married under the sun in the Texas heat (fans will be provided).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Cocktail Hour
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          6:30 PM - 7:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Enjoy drinks and appetizers while we take photos & say hello to everyone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Introduction of Newlyweds
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          7:30 PM - 7:40 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Our wedding party will be introduced, followed by our first appearance as a married couple.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Dinner
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          7:45 PM - 8:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        A plated dinner will be served to all guests. During dinner, there will be a few speeches from both the groom and the bride's side.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        First Dance
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          8:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        We will share our first dance as a married couple.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        Dancing until Dawn
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          8:30 PM - 11:00 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Dance the night away with us! We better see you out on the dance floor at all times, because this is a party!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Venue Information
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-pale-yellow">
            <div className="md:flex">
              <div className="md:w-1/2">
                {/* CUSTOMIZE: Replace with your venue image */}
                <img 
                  src="https://waltersweddingestates.com/wp-content/uploads/2021/12/5-walters-wedding-estates-our-venues-austin-and-san-antonio-collection-stonehaven-hall-at-the-milestone-new-braunfels-12-24-gallery-image-2.jpg" 
                  alt="Venue" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {/* CUSTOMIZE: Replace with your venue name */}
                  Stonehaven at the Milestone
                </h3>
                
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-pale-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-black">Address:</p>
                    <p className="text-black">
                      {/* CUSTOMIZE: Replace with your venue address */}
                      1723 Herbelin Rd, New Braunfels, TX 78132
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-6">
                  <Car className="w-5 h-5 text-pale-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-black">Parking Information:</p>
                    <p className="text-black">
                      {/* CUSTOMIZE: Add parking details */}
                      Self-parking available on gravel. Parking is in the first lot when you pull in to the venue on the right hand side.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-black">
                    {/* CUSTOMIZE: Add venue description or additional information */}
                    Our venue features stunning views of the beautiful indoor and outdoor spaces for the ceremony and reception.
                  </p>
                </div>
                
                <a 
                  href="https://maps.app.goo.gl/q39QNSeiDzjKcAWSA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-medium hover:text-pale-blue transition-colors"
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
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Hotel Recommendations
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              {/* CUSTOMIZE: Add accommodations intro */}
              We've reserved a room at the JW Marriott for our wedding night, and anyone wanting to stay at the hotel as well is welcome to stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hotel 1 - JW Marriott */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop&crop=center" 
                  alt="JW Marriott San Antonio Hill Country Resort & Spa" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    JW Marriott
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    Located just 30 minutes from the venue. This is one of the nicest hotels in San Antonio and is home to the renowned TPC San Antonio golf course played on the PGA tour.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    $400/night
                  </span>
                  <a 
                    href="https://www.marriott.com/search/availabilityCalendar.mi?isRateCalendar=true&propertyCode=SATJW&isSearch=true&currency=&costTab=average#/0/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Hotel 2 - Courtyard Marriott */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop&crop=center" 
                  alt="Courtyard by Marriott San Antonio Airport" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    Courtyard Marriott
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    Located a little farther from the venue, but closer to the San Antonio airport. This is a hotel that will provide you with the easiest access to everything and is the perfect middle ground between being in between the airport and the venue.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    $185/night
                  </span>
                  <a 
                    href="https://www.marriott.com/reservation/rateListMenu.mi?dclid=CjkKEQjw6NrBBhCnsr3GzNuZ-dwBEiQAFJKSzdZYjaWswLT_FEGE6nioptaK-epr62qWQpHtc12vefe3w_wcB&gbraid=0AAAAAo3SzG6xw854UOJGzACxCA_PvgDel&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rpIy08LjoDXH3ROE8WR-kpt8zwDWRpHO2f0yVJm2Xgcpk_sh3_Eq_RoCGC0QAvD_BwE" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Hotel 3 - Hotel Emma */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop&crop=center" 
                  alt="Hotel Emma San Antonio" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">
                    Hotel Emma
                  </h3>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-black text-center text-sm">
                    Located approximately 45 minutes from the venue. If you are interested in staying at the only 5 Star Hotel San Antonio has to offer, Hotel Emma is it. While it is located the farthest from the Venue, it gives you the opportunity to experience San Antonio if you plan on staying for more than a couple days.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-black font-medium text-lg">
                    $560/night
                  </span>
                  <a 
                    href="https://be.synxis.com/?_gl=1*1nylehy*_gcl_au*MTQ1MDgyNjI4LjE3NDc4NzUxNzE.*_ga*MTM4ODYwMTk4MS4xNzQ3ODc1MTcy*_ga_0D7P5TR5JN*czE3NDg0ODUyMTkkbzIkZzEkdDE3NDg0ODUzMTkkajU0JGwwJGgxNzQxODE2MjE3&adult=2&arrive=2025-05-28&chain=10237&child=0&currency=USD&depart=2025-05-29&hotel=65605&level=hotel&locale=en-US&productcurrency=USD&rooms=1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Travel Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Travel Information
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-pale-yellow">
            {/* CUSTOMIZE: Add your travel information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">By Air</h3>
                <p className="text-black">
                  {/* CUSTOMIZE: Airport information */}
                  The nearest airport is the San Antonio Airport, which is approximately 40 minutes from the venue, and 30 minutes from the hotel we are staying at. If you are thinking
                  of flying into Austin, that would work too, but be careful as the traffic south from Austin to San Antonio is never enjoyable.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">By Car</h3>
                <p className="text-black">
                  {/* CUSTOMIZE: Driving directions */}
                  Most likely, you will be staying near or around San Antonio. In this case, as you are driving north on 281, you will get off the highway and take a right on 46. Our venue
                  is just 10-15 minutes after you make that turn, and the venue will be on the right side of the road near a small vineyard.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Transportation</h3>
                <p className="text-black">
                  {/* CUSTOMIZE: Transportation options */}
                  There is currently no shuttle service that will be provided by us, but we recommend getting an uber to our venue as it is not too far from San Antonio. Please make sure
                  that you are not drinking and driving to or from the venue. We want everyone to have a great time so if you plan on doing so with alcohol, make sure you Uber!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Additional Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Dinner Options */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <UtensilsCrossed className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Dinner Options</h3>
              <p className="text-black">
                {/* CUSTOMIZE: Add information about food options */}
                We will be serving a choice of Option 1 or Option 2. Please indicate your preference in the RSVP form.
              </p>
            </div>
            
            {/* Registry */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <Gift className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Registry</h3>
              <p className="text-black mb-4">
                {/* CUSTOMIZE: Add information about your registry */}
                We've registered at several stores. Visit our registry page to see our wish list.
              </p>
              <a 
                href="/registry" 
                className="text-black hover:text-pale-blue font-medium transition-colors"
              >
                View Registry
              </a>
            </div>
            
            {/* Music */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <Music className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Song Requests</h3>
              <p className="text-black">
                {/* CUSTOMIZE: Add information about music requests */}
                Have a song you want to hear at the reception? Let us know in your RSVP and we can potentially make it happen! (We reserve the right to say no)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
