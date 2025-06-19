
import React from 'react';
import { ExternalLink, Check, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface RegistryItemCardProps {
  item: RegistryItem;
}

const RegistryItemCard = ({ item }: RegistryItemCardProps) => {
  const isPurchased = item.purchased >= item.quantity;
  const isPartiallyPurchased = item.purchased > 0 && item.purchased < item.quantity;
  const remainingQuantity = item.quantity - item.purchased;

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-butter-yellow group ${
      isPurchased ? 'opacity-75' : ''
    }`}>
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={item.image_url || '/placeholder.svg'} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Overlay */}
        {isPurchased && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>
        )}
        
        {/* Partial Purchase Badge */}
        {isPartiallyPurchased && !isPurchased && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {item.purchased}/{item.quantity} purchased
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/90 hover:bg-white shadow-lg"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Item Name */}
        <h3 className="text-xl font-semibold text-black mb-2 line-clamp-2 group-hover:text-pale-blue transition-colors">
          {item.name}
        </h3>
        
        {/* Description */}
        {item.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        )}
        
        {/* Price and Store */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-black">
              ${Number(item.price).toFixed(2)}
            </span>
            {item.quantity > 1 && (
              <span className="text-sm text-gray-600 ml-2">
                (Qty: {item.quantity})
              </span>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Available at</p>
            <p className="text-sm font-medium text-black">{item.store_name}</p>
          </div>
        </div>

        {/* Remaining Quantity */}
        {!isPurchased && isPartiallyPurchased && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-orange-800">
              <strong>{remainingQuantity}</strong> of {item.quantity} still needed
            </p>
          </div>
        )}

        {/* Category */}
        {item.category && (
          <div className="mb-4">
            <span className="inline-block bg-butter-yellow text-black px-3 py-1 rounded-full text-xs font-medium">
              {item.category}
            </span>
          </div>
        )}

        {/* Action Button */}
        <div className="flex gap-2">
          {isPurchased ? (
            <Button
              disabled
              className="flex-1 bg-green-100 text-green-800 border border-green-200 hover:bg-green-100"
            >
              <Check className="w-4 h-4 mr-2" />
              Thank You!
            </Button>
          ) : (
            <Button
              asChild
              className="flex-1 bg-pale-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <a
                href={item.registry_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
          
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-gray-300 hover:border-pale-blue hover:text-pale-blue"
          >
            <a
              href={item.store_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistryItemCard;
