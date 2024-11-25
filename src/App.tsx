import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import Documentation from './pages/Documentation';
import FAQ from './pages/FAQ';
import QualityControlAI from './pages/QualityControlAI';
import SmartFactory from './pages/SmartFactory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/quality-control-ai" element={<QualityControlAI />} />
        <Route path="/smart-factory" element={<SmartFactory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;