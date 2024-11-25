import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowRight, BarChart, TrendingUp, Clock } from 'lucide-react';

const caseStudies = [
  {
    title: 'Global Automotive Manufacturer Reduces Downtime by 45%',
    company: 'AutoTech Industries',
    industry: 'Automotive',
    results: [
      '45% reduction in unplanned downtime',
      '$2.3M annual maintenance savings',
      '30% increase in equipment lifespan'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  },
  {
    title: 'Electronics Manufacturer Achieves 99.9% Quality Rate',
    company: 'ElectroPro Solutions',
    industry: 'Electronics',
    results: [
      '99.9% quality inspection accuracy',
      '35% reduction in defect rate',
      '40% faster production cycles'
    ],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80'
  },
  {
    title: 'Pharmaceutical Company Optimizes Production Efficiency',
    company: 'PharmaTech Global',
    industry: 'Pharmaceutical',
    results: [
      '50% reduction in batch processing time',
      '25% increase in production capacity',
      '$3.5M annual cost savings'
    ],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80'
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Success Stories</h1>
            <p className="text-xl text-slate-300">Real results from real clients</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div key={study.title} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-custom-purple mb-2">
                      <TrendingUp className="w-4 h-4" />
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-slate-400 mb-4">{study.company}</p>
                    
                    <div className="space-y-2 mb-6">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center gap-2 text-slate-300">
                          <BarChart className="w-4 h-4 text-emerald-400" />
                          {result}
                        </div>
                      ))}
                    </div>

                    <button className="w-full inline-flex items-center justify-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}