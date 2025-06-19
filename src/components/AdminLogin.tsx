
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can change this password to whatever you want
    const adminPassword = 'admin123';
    
    if (password === adminPassword) {
      localStorage.setItem('registryAdmin', 'true');
      onLogin();
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="text-center mb-6">
          <Lock className="w-12 h-12 mx-auto mb-4 text-sage-green" />
          <h2 className="text-2xl font-serif text-black">Admin Access</h2>
          <p className="text-gray-600 mt-2">Enter password to access registry admin</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              type="submit"
              className="flex-1 bg-sage-green hover:bg-sage-green/80 text-white"
            >
              Login
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          Admin access is required to add or edit registry items
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
