import React from 'react';
import Navbar from '../components/Navbar';
import { Shield, CheckCircle, BarChart, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Visual Inspection',
    description: 'AI-powered defect detection with 99.9% accuracy',
    icon: Shield
  },
  {
    title: 'Real-time Analysis',
    description: 'Instant quality assessment and reporting',
    icon: Zap
  },
  {
    title: 'Performance Metrics',
    description: 'Comprehensive quality analytics dashboard',
    icon: BarChart
  }
];

const benefits = [
  'Reduce defect rates by up to 90%',
  'Cut inspection costs by 70%',
  'Eliminate human error in quality control',
  'Increase production throughput',
  'Ensure consistent quality standards',
  'Generate detailed quality reports'
];

export default function QualityControlAI() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">
                AI-Powered Quality Control
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Achieve unprecedented accuracy in quality control with our advanced AI inspection system.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <feature.icon className="w-6 h-6 text-custom-purple flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                      <p className="text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="inline-flex items-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Key Benefits</h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}