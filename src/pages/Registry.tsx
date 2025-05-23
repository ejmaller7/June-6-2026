
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

interface Store {
  name: string;
  url: string;
  logo: string;
}

const Registry = () => {
  // CUSTOMIZE: Add your desired registry stores here
  // Format: { name: "Store Name", url: "https://store-website.com", logo: "path-to-logo-image" }
  const [stores] = useState<Store[]>([
    // Amazon example - CUSTOMIZE with your registry URL
    // { name: "Amazon", url: "https://www.amazon.com/wedding/registry-link", logo: "/logos/amazon.png" },
    
    // Crate & Barrel example - CUSTOMIZE with your registry URL
    // { name: "Crate & Barrel", url: "https://www.crateandbarrel.com/gift-registry/registry-link", logo: "/logos/crate-and-barrel.png" },
    
    // Sur La Table example - CUSTOMIZE with your registry URL
    // { name: "Sur La Table", url: "https://www.surlatable.com/registry/registry-link", logo: "/logos/sur-la-table.png" },
    
    // Target example - CUSTOMIZE with your registry URL
    // { name: "Target", url: "https://www.target.com/gift-registry/registry-link", logo: "/logos/target.png" },
    
    // Bed Bath & Beyond example - CUSTOMIZE with your registry URL
    // { name: "Bed Bath & Beyond", url: "https://www.bedbathandbeyond.com/store/giftregistry/registry-link", logo: "/logos/bed-bath-beyond.png" },
    
    // Williams Sonoma example - CUSTOMIZE with your registry URL
    // { name: "Williams Sonoma", url: "https://www.williams-sonoma.com/registry/registry-link", logo: "/logos/williams-sonoma.png" },
    
    // CUSTOMIZE: Add more stores as needed following the same format
  ]);

  // CUSTOMIZE: Add your registry items here
  // Format follows the RegistryItem interface above
  const [registryItems] = useState<RegistryItem[]>([
    // Example item - CUSTOMIZE or remove
    // {
    //   id: '1',
    //   name: "KitchenAid Stand Mixer",
    //   price: 349.99,
    //   image: "/images/kitchenaid-mixer.jpg",
    //   store: "Amazon",
    //   storeUrl: "https://www.amazon.com/product-link",
    //   quantity: 1,
    //   purchased: 0,
    //   description: "Professional 5-quart mixer in Matte White",
    // },
    
    // CUSTOMIZE: Add more items following the same format
    // Each item needs: id, name, price, image, store, storeUrl, quantity, purchased, description
  ]);

  const isPurchased = (item: RegistryItem) => item.purchased >= item.quantity;
  const isPartiallyPurchased = (item: RegistryItem) => item.purchased > 0 && item.purchased < item.quantity;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Wedding Registry
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
            {/* CUSTOMIZE: Replace with your registry introduction */}
            {/* Example: Your presence at our wedding is the greatest gift of all. If you wish to honor us 
            with a gift, we've curated a selection of items that will help us build our new home together. */}
          </p>
        </div>
      </div>

      {/* Registry Stores */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-black mb-12">
            Where We're Registered
          </h2>
          {stores.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-black">
                No stores have been added yet. Please add your registry stores in the Registry.tsx file.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stores.map((store, index) => (
                <a
                  key={index}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-pale-yellow rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-pale-yellow">
                    <img 
                      src={store.logo} 
                      alt={store.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-black group-hover:text-pale-blue transition-colors">
                    {store.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2 text-black group-hover:text-pale-blue transition-colors" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Registry Items */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-black mb-12">
            Our Wish List
          </h2>
          {registryItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-black">
                No items have been added yet. Please add your registry items in the Registry.tsx file.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {registryItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-pale-yellow ${
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
                          <Check className="w-8 h-8 text-pale-blue" />
                        </div>
                      </div>
                    )}
                    {isPartiallyPurchased(item) && !isPurchased(item) && (
                      <div className="absolute top-4 right-4 bg-pale-yellow text-black px-2 py-1 rounded-full text-sm font-medium">
                        {item.purchased}/{item.quantity} purchased
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
                    <p className="text-black text-sm mb-3">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-black">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-black">
                        Qty: {item.quantity}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black font-medium">
                        {item.store}
                      </span>
                      {isPurchased(item) ? (
                        <span className="bg-pale-yellow text-black px-3 py-1 rounded-full text-sm font-medium">
                          Purchased ✓
                        </span>
                      ) : (
                        <a
                          href={item.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2"
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
          )}
        </div>
      </div>

      {/* Instructions and Thank You */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-black mb-6">
            Instructions for Adding Registry Items
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 text-left mb-12 border border-pale-yellow">
            <p className="text-lg text-black mb-6">
              To add items to your registry:
            </p>
            <ol className="space-y-4 text-black">
              <li className="flex items-start">
                <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-2 flex-shrink-0">1</span>
                <span>Upload product images to the public/images folder (create it if it doesn't exist)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-2 flex-shrink-0">2</span>
                <span>Add the item to the registryItems array in the Registry.tsx file</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-2 flex-shrink-0">3</span>
                <span>Include all required fields: id, name, price, image, store, storeUrl, quantity, purchased, description</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-2 flex-shrink-0">4</span>
                <span>Set the "purchased" field to 0 initially, and update it when items are purchased</span>
              </li>
            </ol>
          </div>
          
          <h2 className="text-3xl font-serif text-black mb-6">
            Thank You
          </h2>
          <p className="text-lg text-black leading-relaxed">
            {/* CUSTOMIZE: Replace with your thank you message */}
            {/* Example: Your love, support, and presence mean the world to us. Any gift you choose to give 
            will be cherished as we start this new chapter of our lives together. We're grateful 
            for each and every one of you who will be celebrating with us on our special day. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registry;
