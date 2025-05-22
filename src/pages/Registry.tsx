
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ExternalLink, Check } from 'lucide-react';

interface RegistryItem {
  id: string;
  name: string;
  price: number;
  image: string;
  store: string;
  storeUrl: string;
  quantity: number;
  purchased: number;
  description: string;
}

const Registry = () => {
  const [registryItems] = useState<RegistryItem[]>([
    {
      id: '1',
      name: 'Professional Stand Mixer',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      store: 'Williams Sonoma',
      storeUrl: 'https://williams-sonoma.com',
      quantity: 1,
      purchased: 0,
      description: 'Perfect for all our baking adventures together',
    },
    {
      id: '2',
      name: 'Egyptian Cotton Sheet Set',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      store: 'Pottery Barn',
      storeUrl: 'https://potterybarn.com',
      quantity: 1,
      purchased: 1,
      description: 'Luxurious sheets for our master bedroom',
    },
    {
      id: '3',
      name: 'Cast Iron Dutch Oven',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1556909144-f5419188e6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      store: 'Sur La Table',
      storeUrl: 'https://surlatable.com',
      quantity: 1,
      purchased: 0,
      description: 'For cozy home-cooked meals',
    },
    {
      id: '4',
      name: 'Fine China Dinner Set',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      store: 'Crate & Barrel',
      storeUrl: 'https://crateandbarrel.com',
      quantity: 1,
      purchased: 0,
      description: 'Elegant dinnerware for special occasions',
    },
    {
      id: '5',
      name: 'Coffee Maker with Grinder',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      store: 'Williams Sonoma',
      storeUrl: 'https://williams-sonoma.com',
      quantity: 1,
      purchased: 0,
      description: 'For our morning coffee rituals',
    },
    {
      id: '6',
      name: 'Luxury Towel Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1584622650481-12df8b1ccfa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      store: 'Pottery Barn',
      storeUrl: 'https://potterybarn.com',
      quantity: 2,
      purchased: 1,
      description: 'Soft, plush towels for our bathroom',
    },
  ]);

  const stores = [
    {
      name: 'Williams Sonoma',
      url: 'https://williams-sonoma.com',
      logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Pottery Barn',
      url: 'https://potterybarn.com',
      logo: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Crate & Barrel',
      url: 'https://crateandbarrel.com',
      logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Sur La Table',
      url: 'https://surlatable.com',
      logo: 'https://images.unsplash.com/photo-1556909144-f5419188e6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  const isPurchased = (item: RegistryItem) => item.purchased >= item.quantity;
  const isPartiallyPurchased = (item: RegistryItem) => item.purchased > 0 && item.purchased < item.quantity;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            Wedding Registry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Your presence at our wedding is the greatest gift of all. If you wish to honor us 
            with a gift, we've curated a selection of items that will help us build our new home together.
          </p>
        </div>
      </div>

      {/* Registry Stores */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
            Where We're Registered
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stores.map((store, index) => (
              <a
                key={index}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={store.logo} 
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-rose-600 transition-colors">
                  {store.name}
                </h3>
                <ExternalLink className="w-4 h-4 mx-auto mt-2 text-gray-400 group-hover:text-rose-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Registry Items */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
            Our Wish List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registryItems.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  isPurchased(item) ? 'opacity-75' : ''
                }`}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  {isPurchased(item) && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  )}
                  {isPartiallyPurchased(item) && !isPurchased(item) && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      {item.purchased}/{item.quantity} purchased
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-rose-600">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">
                      {item.store}
                    </span>
                    {isPurchased(item) ? (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Purchased ✓
                      </span>
                    ) : (
                      <a
                        href={item.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                      >
                        Purchase
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="py-16 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-6">
            Thank You
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your love, support, and presence mean the world to us. Any gift you choose to give 
            will be cherished as we start this new chapter of our lives together. We're grateful 
            for each and every one of you who will be celebrating with us on our special day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registry;
