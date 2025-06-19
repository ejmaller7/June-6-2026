
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface RegistryFiltersProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  purchaseStatus: string;
  setPurchaseStatus: (status: string) => void;
  category: string;
  setCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  categories: string[];
}

const RegistryFilters = ({
  priceRange,
  setPriceRange,
  purchaseStatus,
  setPurchaseStatus,
  category,
  setCategory,
  sortBy,
  setSortBy,
  categories
}: RegistryFiltersProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-butter-yellow">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-black" />
        <h3 className="text-lg font-semibold text-black">Filter & Sort</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">Price Range</label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={priceRange[0] || ''}
              onChange={(e) => setPriceRange([Number(e.target.value) || 0, priceRange[1]])}
              className="text-sm"
            />
            <Input
              type="number"
              placeholder="Max"
              value={priceRange[1] || ''}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value) || 999999])}
              className="text-sm"
            />
          </div>
        </div>

        {/* Purchase Status */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">Availability</label>
          <Select value={purchaseStatus} onValueChange={setPurchaseStatus}>
            <SelectTrigger>
              <SelectValue placeholder="All items" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="purchased">Purchased</SelectItem>
              <SelectItem value="partial">Partially Purchased</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">Sort By</label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <Button
            variant="outline"
            onClick={() => {
              setPriceRange([0, 999999]);
              setPurchaseStatus('all');
              setCategory('all');
              setSortBy('newest');
            }}
            className="w-full border-black text-black hover:bg-butter-yellow"
          >
            <Filter className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistryFilters;
