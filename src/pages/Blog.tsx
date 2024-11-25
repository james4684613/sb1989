import React from 'react';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-custom-purple/30 rounded-full blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-custom-purple/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-purple to-emerald-400">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Stay updated with the latest trends and innovations in AI manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(blogPosts).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}