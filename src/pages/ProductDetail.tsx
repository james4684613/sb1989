import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, ArrowRight } from 'lucide-react';

const products = {
  'ai-manufacturing-suite': {
    title: 'AI Manufacturing Suite',
    description: 'Complete factory automation solution powered by advanced neural networks',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    features: [
      'Real-time production optimization',
      'Predictive maintenance',
      'Quality control automation',
      'Resource management',
      'Energy optimization',
      'Performance analytics'
    ],
    benefits: [
      'Reduce operational costs by up to 30%',
      'Improve product quality by 25%',
      'Minimize downtime by 40%',
      'Increase overall efficiency by 35%'
    ],
    price: 'Custom pricing based on your needs'
  },
  'predictive-analytics': {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting tools that help you make data-driven decisions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    features: [
      'Production forecasting',
      'Demand prediction',
      'Risk assessment',
      'Performance analytics',
      'Custom reporting',
      'Real-time insights'
    ],
    benefits: [
      'Improve forecast accuracy by 40%',
      'Reduce inventory costs by 25%',
      'Optimize supply chain efficiency',
      'Better resource allocation'
    ],
    price: 'Starting at $999/mo'
  }
};

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products[productId as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
              <p className="text-xl text-slate-300 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-5 h-5 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-5 h-5 text-emerald-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Pricing</h3>
                <p className="text-custom-purple text-lg">{product.price}</p>
              </div>

              <div className="flex gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-8 py-3 rounded-3xl font-semibold transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/demo" 
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-3xl font-semibold transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}