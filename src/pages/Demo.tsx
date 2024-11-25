import React from 'react';
import Navbar from '../components/Navbar';
import { Play, Download, Calendar } from 'lucide-react';

export default function Demo() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Product Demo</h1>
            <p className="text-xl text-slate-300">See our AI Manufacturing Suite in action</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden">
                <div className="aspect-video relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80" 
                    alt="Demo video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group-hover:bg-slate-900/60 transition-colors">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Product Overview</h3>
                  <p className="text-slate-300">A comprehensive walkthrough of our AI Manufacturing Suite features and capabilities.</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-custom-purple hover:text-custom-purple-dark transition-colors">
                    <Download className="w-4 h-4" />
                    Download Presentation
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Schedule a Live Demo</h2>
                <p className="text-slate-300 mb-6">
                  Want a personalized demonstration? Schedule a call with our product specialists to see how our solutions can benefit your manufacturing process.
                </p>
                <button className="w-full inline-flex items-center justify-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
                  <Calendar className="w-4 h-4" />
                  Schedule Demo Call
                </button>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
                <p className="text-slate-300">Read success stories from our clients</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-slate-300">Technical specifications and guides</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
                <p className="text-slate-300">Common questions and answers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}