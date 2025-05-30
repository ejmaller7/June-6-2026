import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '../components/Navbar';
import RegistryAdmin from '../components/RegistryAdmin';
import { ExternalLink, Check, Plus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface RegistryItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  store_name: string;
  store_url: string;
  registry_url: string;
  quantity: number;
  purchased: number;
  description: string;
  category: string;
}

interface RegistryStore {
  id: string;
  name: string;
  logo_url: string;
  base_url: string;
  registry_url: string;
  is_active: boolean;
}

const Registry = () => {
  // Fetch registry stores from Supabase
  const { data: stores = [], isLoading: storesLoading } = useQuery({
    queryKey: ['registry-stores'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('registry_stores')
        .select('*')
        .eq('is_active', true)
        .order('name');
      
      if (error) {
        console.error('Error fetching stores:', error);
        return [];
      }
      return data as RegistryStore[];
    },
  });

  // Fetch registry items from Supabase
  const { data: registryItems = [], isLoading: itemsLoading, refetch } = useQuery({
    queryKey: ['registry-items'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('registry_items')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching registry items:', error);
        return [];
      }
      return data as RegistryItem[];
    },
  });

  // Set up real-time subscriptions for live updates
  useEffect(() => {
    const itemsChannel = supabase
      .channel('registry-items-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'registry_items'
        },
        () => {
          console.log('Registry items updated');
          refetch();
        }
      )
      .subscribe();

    const purchasesChannel = supabase
      .channel('registry-purchases-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'registry_purchases'
        },
        (payload) => {
          console.log('New purchase recorded:', payload);
          refetch();
          toast({
            title: "Item Purchased! 🎉",
            description: "Someone just purchased an item from your registry!",
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(itemsChannel);
      supabase.removeChannel(purchasesChannel);
    };
  }, [refetch]);

  const isPurchased = (item: RegistryItem) => item.purchased >= item.quantity;
  const isPartiallyPurchased = (item: RegistryItem) => item.purchased > 0 && item.purchased < item.quantity;

  const handleStoreClick = (store: RegistryStore) => {
    if (store.registry_url === 'YOUR_AMAZON_REGISTRY_URL_HERE' || 
        store.registry_url === 'YOUR_SUR_LA_TABLE_REGISTRY_URL_HERE' || 
        store.registry_url === 'YOUR_CRATE_AND_BARREL_REGISTRY_URL_HERE') {
      toast({
        title: "Registry URL Not Set",
        description: `Please update the registry URL for ${store.name} in your database.`,
        variant: "destructive",
      });
      return;
    }
    window.open(store.registry_url, '_blank');
  };

  if (storesLoading || itemsLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
              Wedding Registry
            </h1>
            <p className="text-xl text-black">Loading your registry...</p>
          </div>
        </div>
      </div>
    );
  }

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
            Your presence at our wedding is the greatest gift of all. If you wish to honor us 
            with a gift, we've curated a selection of items that will help us build our new home together.
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
                No stores have been added yet. Registry stores are loading...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => handleStoreClick(store)}
                  className="group bg-white border border-pale-yellow rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img 
                      src={store.logo_url || ''} 
                      alt={store.name}
                      className="max-w-16 max-h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-black group-hover:text-pale-blue transition-colors mb-3">
                    {store.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-black group-hover:text-pale-blue transition-colors mr-2">
                      Visit Registry
                    </span>
                    <ExternalLink className="w-4 h-4 text-black group-hover:text-pale-blue transition-colors" />
                  </div>
                </button>
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
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-black mb-6">
                  We haven't added specific items to our wish list yet, but you can find everything we love at the stores above!
                </p>
                <p className="text-lg text-black">
                  Simply click on any of the store links above to browse their full selection and find the perfect gift for us.
                </p>
              </div>
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
                      src={item.image_url || '/placeholder.svg'} 
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
                        ${Number(item.price).toFixed(2)}
                      </span>
                      <span className="text-sm text-black">
                        Qty: {item.quantity}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black font-medium">
                        {item.store_name}
                      </span>
                      {isPurchased(item) ? (
                        <span className="bg-pale-yellow text-black px-3 py-1 rounded-full text-sm font-medium">
                          Purchased ✓
                        </span>
                      ) : (
                        <a
                          href={item.registry_url}
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

      {/* How Registry Works */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-black mb-6">
            How Our Registry Works
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 text-left mb-12 border border-pale-yellow">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">For Gift Givers:</h3>
                <ol className="space-y-3 text-black">
                  <li className="flex items-start">
                    <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-3 flex-shrink-0 text-sm">1</span>
                    <span>Click on any store above to visit our specific registry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-3 flex-shrink-0 text-sm">2</span>
                    <span>Browse items or click "Purchase" on specific items below</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-3 flex-shrink-0 text-sm">3</span>
                    <span>Purchase directly through the store</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pale-yellow rounded-full w-6 h-6 flex items-center justify-center text-black font-medium mr-3 flex-shrink-0 text-sm">4</span>
                    <span>Items automatically update here when purchased!</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Registry Benefits:</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <span className="text-pale-blue mr-2">•</span>
                    <span>Real-time updates - see what's been purchased instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pale-blue mr-2">•</span>
                    <span>Direct links to our specific registries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pale-blue mr-2">•</span>
                    <span>Multiple price ranges to fit any budget</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pale-blue mr-2">•</span>
                    <span>Items ship directly to us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-serif text-black mb-6">
            Thank You
          </h2>
          <p className="text-lg text-black leading-relaxed">
            Your love, support, and presence mean the world to us. Any gift you choose to give 
            will be cherished as we start this new chapter of our lives together. We're grateful 
            for each and every one of you who will be celebrating with us on our special day.
          </p>
        </div>
      </div>

      {/* Add the admin component at the bottom */}
      <RegistryAdmin />
    </div>
  );
};

export default Registry;
