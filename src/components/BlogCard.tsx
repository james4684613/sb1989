import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.id}`} className="relative group">
      <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-transparent transition duration-200 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
          <p className="text-slate-300 mb-4">{post.excerpt}</p>

          <div className="flex items-center gap-3 mb-4">
            <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-white font-medium text-sm">{post.author.name}</p>
              <p className="text-slate-400 text-sm">{post.author.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="text-sm text-custom-purple bg-custom-purple/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}