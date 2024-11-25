import React from 'react';
import Navbar from '../components/Navbar';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'Senior AI Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead the development of our next-generation AI manufacturing solutions...'
  },
  {
    title: 'Machine Learning Specialist',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and implement machine learning models for predictive maintenance...'
  },
  {
    title: 'Manufacturing Solutions Architect',
    location: 'Boston, MA',
    type: 'Full-time',
    description: 'Work with clients to design and implement AI manufacturing solutions...'
  }
];

const benefits = [
  'Competitive salary and equity',
  'Health, dental, and vision insurance',
  'Flexible work arrangements',
  'Professional development budget',
  'Regular team events and activities',
  'Modern office with great amenities'
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
            <p className="text-xl text-slate-300">Help us shape the future of manufacturing</p>
          </div>

          {/* Current Openings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {jobs.map((job) => (
              <div key={job.title} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  
                  <div className="flex items-center gap-2 text-slate-300 mb-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-300 mb-4">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </div>
                  
                  <p className="text-slate-300 mb-6">{job.description}</p>
                  
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h2 className="text-2xl font-semibold text-white mb-8">Why Work With Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-custom-purple flex-shrink-0 mt-1" />
                    <p className="text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}