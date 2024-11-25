import React from 'react';
import Navbar from '../components/Navbar';
import { Book, Code, Terminal, Settings, Database, Cloud } from 'lucide-react';

const docs = [
  {
    title: 'Getting Started',
    icon: Book,
    sections: [
      'Quick Start Guide',
      'System Requirements',
      'Installation Process',
      'Basic Configuration'
    ]
  },
  {
    title: 'API Reference',
    icon: Code,
    sections: [
      'Authentication',
      'Endpoints',
      'Data Models',
      'Error Handling'
    ]
  },
  {
    title: 'Integration Guide',
    icon: Terminal,
    sections: [
      'REST API Integration',
      'WebSocket Implementation',
      'Event Handling',
      'Webhooks'
    ]
  },
  {
    title: 'Configuration',
    icon: Settings,
    sections: [
      'System Settings',
      'User Management',
      'Security Options',
      'Customization'
    ]
  },
  {
    title: 'Data Management',
    icon: Database,
    sections: [
      'Data Models',
      'Query Optimization',
      'Backup & Recovery',
      'Migration Guide'
    ]
  },
  {
    title: 'Deployment',
    icon: Cloud,
    sections: [
      'Cloud Deployment',
      'On-Premise Setup',
      'Scaling Guide',
      'Monitoring'
    ]
  }
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
            <p className="text-xl text-slate-300">Everything you need to implement and manage your AI solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((section) => (
              <div key={section.title} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                  <section.icon className="w-8 h-8 text-custom-purple mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                  
                  <ul className="space-y-2">
                    {section.sections.map((item) => (
                      <li key={item} className="text-slate-300 hover:text-white cursor-pointer transition-colors">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}