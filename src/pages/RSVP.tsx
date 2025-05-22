
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    guestNames: '',
    dietaryRestrictions: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    
    toast({
      title: "RSVP Submitted Successfully!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      attendance: '',
      guests: '1',
      guestNames: '',
      dietaryRestrictions: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            RSVP
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're so excited to celebrate with you! Please let us know if you'll be joining us 
            for our special day by Friday, May 15th, 2024.
          </p>
        </div>
      </div>

      {/* RSVP Form */}
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-base font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-base font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* Attendance */}
              <div>
                <Label className="text-base font-medium text-gray-700 mb-3 block">
                  Will you be attending? *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => handleInputChange('attendance', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes, I'll be there!</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">Sorry, I can't make it</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'yes' && (
                <>
                  <div>
                    <Label htmlFor="guests" className="text-base font-medium text-gray-700">
                      Number of Guests (including yourself)
                    </Label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-rose-500 focus:outline-none focus:ring-rose-500"
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  {/* Guest Names */}
                  {parseInt(formData.guests) > 1 && (
                    <div>
                      <Label htmlFor="guestNames" className="text-base font-medium text-gray-700">
                        Names of Additional Guests
                      </Label>
                      <Textarea
                        id="guestNames"
                        value={formData.guestNames}
                        onChange={(e) => handleInputChange('guestNames', e.target.value)}
                        placeholder="Please list the names of your additional guests"
                        className="mt-1"
                      />
                    </div>
                  )}

                  {/* Dietary Restrictions */}
                  <div>
                    <Label htmlFor="dietaryRestrictions" className="text-base font-medium text-gray-700">
                      Dietary Restrictions or Allergies
                    </Label>
                    <Textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                      placeholder="Please let us know about any dietary restrictions or food allergies"
                      className="mt-1"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-base font-medium text-gray-700">
                  Message for the Couple
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Share your excitement or well wishes!"
                  className="mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-lg font-medium"
                  disabled={!formData.name || !formData.email || !formData.attendance}
                >
                  Submit RSVP
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="py-16 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-gray-800 mb-6">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">RSVP Deadline</h3>
                <p className="text-gray-600">
                  Please respond by Friday, May 15th, 2024 so we can finalize our headcount 
                  with the caterer and venue.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Questions?</h3>
                <p className="text-gray-600">
                  If you have any questions about the wedding or need to make changes to your RSVP, 
                  please contact us at sarah.john.wedding@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
