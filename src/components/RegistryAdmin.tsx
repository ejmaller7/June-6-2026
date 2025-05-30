
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Save } from 'lucide-react';

interface RegistryItemForm {
  name: string;
  description: string;
  price: string;
  image_url: string;
  store_name: string;
  store_url: string;
  registry_url: string;
  quantity: string;
  category: string;
}

const RegistryAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegistryItemForm>({
    name: '',
    description: '',
    price: '',
    image_url: '',
    store_name: '',
    store_url: '',
    registry_url: '',
    quantity: '1',
    category: '',
  });

  const handleInputChange = (field: keyof RegistryItemForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('registry_items')
        .insert([
          {
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price),
            image_url: formData.image_url,
            store_name: formData.store_name,
            store_url: formData.store_url,
            registry_url: formData.registry_url,
            quantity: parseInt(formData.quantity),
            category: formData.category,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Registry Item Added! ✨",
        description: "Your item has been added to the registry.",
      });

      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        image_url: '',
        store_name: '',
        store_url: '',
        registry_url: '',
        quantity: '1',
        category: '',
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error adding item:', error);
      toast({
        title: "Error",
        description: "Failed to add registry item. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-pale-yellow hover:bg-white border border-black text-black rounded-full p-4 shadow-lg"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-serif text-black mb-6">Add Registry Item</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Item Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="KitchenAid Stand Mixer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-1">Price *</label>
              <Input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                required
                placeholder="349.99"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-1">Store Name *</label>
              <Input
                value={formData.store_name}
                onChange={(e) => handleInputChange('store_name', e.target.value)}
                required
                placeholder="Amazon"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-1">Quantity</label>
              <Input
                type="number"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                placeholder="1"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black mb-1">Description</label>
            <Input
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Professional 5-quart mixer in Matte White"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black mb-1">Image URL</label>
            <Input
              type="url"
              value={formData.image_url}
              onChange={(e) => handleInputChange('image_url', e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black mb-1">Registry URL *</label>
            <Input
              type="url"
              value={formData.registry_url}
              onChange={(e) => handleInputChange('registry_url', e.target.value)}
              required
              placeholder="https://www.amazon.com/your-specific-item-link"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black mb-1">Store URL</label>
            <Input
              type="url"
              value={formData.store_url}
              onChange={(e) => handleInputChange('store_url', e.target.value)}
              placeholder="https://www.amazon.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black mb-1">Category</label>
            <Input
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              placeholder="Kitchen, Bedroom, etc."
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-pale-yellow hover:bg-white border border-black text-black"
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? 'Adding...' : 'Add Item'}
            </Button>
            <Button
              type="button"
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="border-black text-black"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistryAdmin;
