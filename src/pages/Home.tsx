import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bot,
  Users,
  Calendar,
  Phone,
  LinkedinIcon,
  Mic,
  Globe,
  TrendingUp,
  ChevronRight,
  Mail,
  ExternalLink,
  Brain,
  CircuitBoard,
  Clock,
  Target,
  Zap,
  ArrowRight
} from 'lucide-react';

export const services = [
  { icon: Bot, title: 'AI Agents', description: '24/7 AI chatbots that handle leads and customer questions instantly' },
  { icon: Users, title: 'Lead Generators', description: 'AI-driven tools that find and engage new customers automatically' },
  { icon: Calendar, title: 'Appointment Setters', description: 'AI assistants that book calls and send reminders with no human effort' },
  { icon: Phone, title: 'AI Call Agents', description: 'AI-powered phone bots that call and follow up on leads' },
  { icon: LinkedinIcon, title: 'AI Outreach', description: 'AI automates LinkedIn, email, and SMS outreach for maximum conversions' },
  { icon: Mic, title: 'Text-to-Voice AI', description: 'AI that converts text into human-like phone conversations' },
  { icon: Globe, title: 'AI Websites', description: 'Smart, self-updating websites powered by AI for business growth' },
  { icon: TrendingUp, title: 'AI-Powered Marketing', description: 'AI-driven ad targeting, content creation, and full automation' },
];

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 tech-grid tech-grid-small animated-gradient pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dmma-800/95 to-black"></div>
        <div className="absolute inset-0 tech-grid pointer-events-none"></div>
        <div className="absolute inset-0 opacity-70">
          <spline-viewer url="https://prod.spline.design/Kjo002TqCJ1ecpZh/scene.splinecode"></spline-viewer>
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/80 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-12">
              <div className="relative w-20 h-20 mr-4">
                <CircuitBoard className="w-20 h-20 text-sky-200/30 absolute transform -rotate-45" />
                <Brain className="w-20 h-20 text-sky-100/80 absolute" />
              </div>
              <h2 className="text-4xl font-mono font-bold text-sky-100">DMMA</h2>
            </div>
            <h1 className="font-mono text-5xl md:text-6xl font-bold mb-4 bg-gradient-text text-glow tracking-tight">
              You're Losing Leads & Wasting Hours on Manual Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl">
              Every second you spend chasing leads and booking calls manually is time and money lost. AI can do it instantly.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl font-light">
              Let AI book your calls, follow up with leads, and automate your sales while you focus on closing deals.
            </p>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono font-bold transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              Try AI Free for 7 Days
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-dmma-800/10 relative">
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-mono text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group"
              >
                <service.icon className="h-12 w-12 text-sky-200 mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-mono text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-black relative">
        <div className="absolute inset-0 tech-grid tech-grid-small animated-gradient pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-mono text-4xl font-bold text-center mb-16 text-white">Why Choose Us</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-start space-x-8">
              <Clock className="h-12 w-12 text-sky-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-mono text-2xl font-bold mb-3 text-white">Every Hour Counts</h3>
                <p className="text-xl text-gray-400">Every hour you waste on manual lead gen is money left on the table.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-white/20 transform rotate-90" />
            </div>
            <div className="flex items-start space-x-8">
              <Target className="h-12 w-12 text-sky-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-mono text-2xl font-bold mb-3 text-white">Automated Success</h3>
                <p className="text-xl text-gray-400">AI books calls, follows up, and brings in leads 24/7—without you lifting a finger.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-white/20 transform rotate-90" />
            </div>
            <div className="flex items-start space-x-8 bg-white/5 p-8 rounded-xl border border-white/10">
              <Zap className="h-12 w-12 text-sky-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-mono text-2xl font-bold mb-3 text-white">Start Risk-Free Today</h3>
                <p className="text-xl text-gray-400 mb-6">Try our AI automation system with zero risk. No contracts, no commitments.</p>
                <button
                  onClick={handleGetStarted}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono font-bold transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  Book Your Free Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-dmma-800/10 relative">
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-mono text-4xl font-bold text-center mb-4 text-white">Trusted by Businesses Like Yours</h2>
          <p className="text-xl text-center text-gray-400 mb-16">
            DMMA is already automating sales and lead generation for multiple businesses
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://build-rs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden shadow-lg shadow-sky-500/10 border border-white/10 transition-all duration-500 hover:shadow-sky-500/20 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/src/assets/photos/buildfirm.png"
                alt="Build RS Project"
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-mono font-bold text-white mb-2">Build RS</h3>
                <p className="text-gray-300">Construction Excellence</p>
              </div>
            </a>
            <a
              href="https://jugovicgradnja.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden shadow-lg shadow-sky-500/10 border border-white/10 transition-all duration-500 hover:shadow-sky-500/20 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/src/assets/photos/jugovicfirm.png"
                alt="Jugovic Gradnja Project"
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-mono font-bold text-white mb-2">Jugovic Gradnja</h3>
                <p className="text-gray-300">Building Dreams</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-black relative">
        <div className="absolute inset-0 tech-grid tech-grid-small animated-gradient pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-mono text-4xl font-bold mb-4 text-white">Every Day Without AI = Lost Leads & Wasted Time</h2>
          <p className="text-xl text-gray-400 mb-12">Get ahead of the competition with AI automation that works 24/7</p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono font-bold transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            Try AI Free for 7 Days
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-dmma-800/10 relative">
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-mono text-gray-400 mb-4 md:mb-0">
              Reach us at contact@agencydmma.com
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;