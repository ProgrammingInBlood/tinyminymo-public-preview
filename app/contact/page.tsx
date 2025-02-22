"use client";

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useContactFormMutation } from '@/network/mutations';
import { toast } from 'react-hot-toast';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_FORM: ContactForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const { mutate: submitContact, isPending, isSuccess } = useContactFormMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitContact(form, {
      onSuccess: () => {
        toast.success('Message sent successfully!');
        setForm(INITIAL_FORM);
      },
      onError: () => {
        toast.error('Failed to send message. Please try again.');
      },
    });
  };

  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">
            We will be sure to get back to you within 24 hours, Monday - Saturday, 09:00am - 7:30pm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Drop Us a Line</h2>
              
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF6B6B] focus:border-[#FF6B6B]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF6B6B] focus:border-[#FF6B6B]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF6B6B] focus:border-[#FF6B6B]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF6B6B] focus:border-[#FF6B6B]"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#FF6B6B] text-white py-3 rounded-lg font-medium hover:bg-[#ff5252] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Reach Out To Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-[#FF6B6B] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91-7834891711</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-[#FF6B6B] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">support@tinyminymo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ClockIcon className="w-6 h-6 text-[#FF6B6B] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday</p>
                    <p className="text-gray-600">09:00am - 7:30pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 