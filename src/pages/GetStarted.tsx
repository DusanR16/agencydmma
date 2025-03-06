import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Brain, CircuitBoard } from 'lucide-react';
import { services } from './Home';

function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    companyName: '',
    problems: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 tech-grid tech-grid-small animated-gradient pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <CircuitBoard className="w-12 h-12 text-sky-200/30 absolute transform -rotate-45" />
                <Brain className="w-12 h-12 text-sky-100/80 absolute" />
              </div>
              <span className="text-2xl font-mono font-bold text-sky-100">DMMA</span>
            </div>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="relative py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
            <h1 className="text-3xl font-mono font-bold mb-8 text-center bg-gradient-text">Get Started with AI Automation</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Selected Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title} className="bg-dmma-800">
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="problems" className="block text-sm font-medium text-gray-300 mb-2">
                  What problems are you looking to solve?
                </label>
                <textarea
                  id="problems"
                  name="problems"
                  value={formData.problems}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Describe the challenges you're facing..."
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Any other details you'd like to share..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono font-bold transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;