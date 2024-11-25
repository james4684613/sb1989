import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is AI Manufacturing?',
        a: 'AI Manufacturing combines artificial intelligence and machine learning with traditional manufacturing processes to optimize production, reduce costs, and improve quality control through automation and predictive analytics.'
      },
      {
        q: 'How does your solution integrate with existing systems?',
        a: 'Our solution is designed to seamlessly integrate with your existing manufacturing systems through standard APIs and protocols. We provide comprehensive documentation and support for the integration process.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What are the system requirements?',
        a: 'Our system is cloud-based and requires minimal on-premise infrastructure. Basic requirements include internet connectivity and compatible IoT sensors for data collection.'
      },
      {
        q: 'How secure is your platform?',
        a: 'We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards like ISO 27001.'
      }
    ]
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'What kind of support do you provide?',
        a: '24/7 technical support is available through multiple channels including phone, email, and chat. We also provide comprehensive documentation and regular training sessions.'
      },
      {
        q: 'How long does implementation typically take?',
        a: 'Implementation time varies based on your specific needs but typically ranges from 4-12 weeks. This includes integration, testing, and staff training.'
      }
    ]
  }
];

export default function FAQ() {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-300">Find answers to common questions about our AI manufacturing solutions</p>
          </div>

          <div className="space-y-8">
            {faqs.map((category) => (
              <div key={category.category} className="relative">
                <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">{category.category}</h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="border-b border-slate-700 last:border-0 pb-4 last:pb-0">
                        <button
                          onClick={() => toggleQuestion(category.category, index)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <span className="text-lg font-medium text-white">{faq.q}</span>
                          {openQuestions[`${category.category}-${index}`] ? (
                            <ChevronUp className="w-5 h-5 text-custom-purple" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-custom-purple" />
                          )}
                        </button>
                        
                        {openQuestions[`${category.category}-${index}`] && (
                          <p className="mt-4 text-slate-300">{faq.a}</p>
                        )}
                      </div>
                    ))}
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