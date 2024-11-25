import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts[postId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors"
          >
            Back to Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-slate-400 text-sm">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
          
          <div className="flex gap-2 mb-8">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="text-sm text-custom-purple bg-custom-purple/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div 
            className="prose prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts */}
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map(relatedPostId => {
                  const relatedPost = blogPosts[relatedPostId];
                  return (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="group"
                    >
                      <div className="flex gap-4">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="text-white font-medium group-hover:text-custom-purple transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-slate-400 mt-1">
                            {relatedPost.readTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}