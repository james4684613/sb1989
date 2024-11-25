import { BlogPost } from '../types/blog';

export const blogPosts: Record<string, BlogPost> = {
  'future-of-ai': {
    id: 'future-of-ai',
    title: 'The Future of AI in Manufacturing',
    excerpt: 'Explore how artificial intelligence is revolutionizing the manufacturing industry...',
    content: `
      <h2>The AI Revolution in Manufacturing</h2>
      <p>Artificial Intelligence is fundamentally transforming the manufacturing landscape. Through advanced algorithms and machine learning capabilities, AI is enabling unprecedented levels of automation, optimization, and predictive maintenance.</p>
      
      <h3>Key Transformations</h3>
      <ul>
        <li>Real-time production optimization</li>
        <li>Predictive maintenance and downtime reduction</li>
        <li>Quality control automation</li>
        <li>Supply chain optimization</li>
      </ul>

      <h3>Impact on Efficiency</h3>
      <p>Manufacturing facilities implementing AI solutions have reported:</p>
      <ul>
        <li>30% reduction in maintenance costs</li>
        <li>25% improvement in production quality</li>
        <li>20% increase in energy efficiency</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated applications in manufacturing. The integration of AI with IoT devices and edge computing will create truly autonomous manufacturing environments.</p>
    `,
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      role: 'AI Research Director'
    },
    date: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    tags: ['AI', 'Manufacturing', 'Innovation'],
    relatedPosts: ['smart-factory', 'predictive-maintenance']
  },
  'smart-factory': {
    id: 'smart-factory',
    title: 'Implementing Smart Factory Solutions',
    excerpt: 'A comprehensive guide to transforming your traditional factory into a smart manufacturing facility...',
    content: `
      <h2>Smart Factory Implementation Guide</h2>
      <p>Smart factories represent the pinnacle of manufacturing innovation, combining IoT, AI, and automation to create highly efficient production environments.</p>

      <h3>Key Components</h3>
      <ul>
        <li>IoT sensor networks</li>
        <li>Real-time monitoring systems</li>
        <li>Automated quality control</li>
        <li>Predictive maintenance systems</li>
      </ul>

      <h3>Implementation Steps</h3>
      <ol>
        <li>Assessment and planning</li>
        <li>Infrastructure setup</li>
        <li>System integration</li>
        <li>Staff training</li>
        <li>Continuous optimization</li>
      </ol>

      <h2>Success Metrics</h2>
      <p>Measure your smart factory implementation success through:</p>
      <ul>
        <li>Overall Equipment Effectiveness (OEE)</li>
        <li>Production throughput</li>
        <li>Quality metrics</li>
        <li>Energy efficiency</li>
      </ul>
    `,
    author: {
      name: 'Michael Roberts',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      role: 'Manufacturing Solutions Architect'
    },
    date: '2024-03-12',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80',
    tags: ['Smart Factory', 'IoT', 'Automation'],
    relatedPosts: ['future-of-ai', 'predictive-maintenance']
  },
  'predictive-maintenance': {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Success Stories',
    excerpt: 'Real-world examples of how predictive maintenance has saved millions in manufacturing costs...',
    content: `
      <h2>Transforming Maintenance with AI</h2>
      <p>Predictive maintenance has revolutionized how manufacturing facilities approach equipment maintenance and reliability.</p>

      <h3>Case Study: Global Automotive Manufacturer</h3>
      <p>A leading automotive manufacturer implemented our predictive maintenance solution with remarkable results:</p>
      <ul>
        <li>45% reduction in unplanned downtime</li>
        <li>$2.3M annual maintenance cost savings</li>
        <li>30% increase in equipment lifespan</li>
      </ul>

      <h3>Implementation Best Practices</h3>
      <ol>
        <li>Sensor deployment strategy</li>
        <li>Data collection and analysis</li>
        <li>Alert system configuration</li>
        <li>Maintenance workflow integration</li>
      </ol>

      <h2>ROI Analysis</h2>
      <p>Typical return on investment metrics include:</p>
      <ul>
        <li>Reduced maintenance costs</li>
        <li>Increased equipment uptime</li>
        <li>Extended asset lifecycle</li>
        <li>Improved production quality</li>
      </ul>
    `,
    author: {
      name: 'Emily Watson',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
      role: 'Senior Data Scientist'
    },
    date: '2024-03-10',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80',
    tags: ['Maintenance', 'Analytics', 'Case Study'],
    relatedPosts: ['future-of-ai', 'smart-factory']
  }
};